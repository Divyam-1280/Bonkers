import React, { useState, useCallback, useMemo, useEffect } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import CustomNode from './CustomNode';
import { nodeData, colorMap, getDescendantIds, hasChildren } from '../flowData';

const nodeTypes = { custom: CustomNode };

/* ── Responsive layout presets ── */
const LAYOUT_PRESETS = {
  desktop: { NODE_W: 320, NODE_H: 64, H_GAP: 160, V_GAP: 24 },
  tablet:  { NODE_W: 240, NODE_H: 56, H_GAP: 120,  V_GAP: 20 },
  mobile:  { NODE_W: 200, NODE_H: 52, H_GAP: 100,  V_GAP: 16 },
};

function getLayoutPreset() {
  if (typeof window === 'undefined') return LAYOUT_PRESETS.desktop;
  const w = window.innerWidth;
  if (w <= 480) return LAYOUT_PRESETS.mobile;
  if (w <= 768) return LAYOUT_PRESETS.tablet;
  return LAYOUT_PRESETS.desktop;
}

/* Hook: returns layout config that updates on resize */
function useResponsiveLayout() {
  const [config, setConfig] = useState(getLayoutPreset);
  useEffect(() => {
    const onResize = () => setConfig(getLayoutPreset());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return config;
}

/* ── Build visible nodes & edges from expanded state ── */
function buildLayout(expandedSet, layoutCfg = LAYOUT_PRESETS.desktop) {
  const { NODE_W, NODE_H, H_GAP, V_GAP } = layoutCfg;

  const visibleIds = new Set();
  visibleIds.add('total-order');

  nodeData.forEach((n) => {
    if (n.parentId === null) return;
    let current = n;
    let visible = true;
    while (current.parentId !== null) {
      if (!expandedSet.has(current.parentId)) {
        visible = false;
        break;
      }
      current = nodeData.find((nd) => nd.id === current.parentId);
    }
    if (visible) visibleIds.add(n.id);
  });

  function getDepth(id) {
    const nd = nodeData.find((n) => n.id === id);
    if (!nd || nd.parentId === null) return 0;
    return 1 + getDepth(nd.parentId);
  }

  const visibleNodes = nodeData.filter((n) => visibleIds.has(n.id));
  const positions = {};
  const subtreeHeights = {};

  /* Pass 1: compute subtree heights bottom-up */
  function computeSubtreeHeight(nodeId) {
    const children = nodeData.filter(
      (n) => n.parentId === nodeId && visibleIds.has(n.id)
    );
    if (children.length === 0) {
      subtreeHeights[nodeId] = NODE_H;
      return NODE_H;
    }
    let total = 0;
    children.forEach((child) => {
      total += computeSubtreeHeight(child.id);
    });
    total += (children.length - 1) * V_GAP;
    subtreeHeights[nodeId] = total;
    return total;
  }

  /* Pass 2: position nodes top-down (parent is already positioned) */
  function positionSubtree(nodeId) {
    const children = nodeData.filter(
      (n) => n.parentId === nodeId && visibleIds.has(n.id)
    );
    if (children.length === 0) return;

    const depth = getDepth(nodeId);
    const parentY = positions[nodeId].y;
    const totalChildrenHeight =
      children.reduce((sum, c) => sum + subtreeHeights[c.id], 0) +
      (children.length - 1) * V_GAP;

    let offsetY = parentY - totalChildrenHeight / 2;

    children.forEach((child) => {
      const childH = subtreeHeights[child.id];
      const x = (depth + 1) * (NODE_W + H_GAP);
      const y = offsetY + childH / 2 - NODE_H / 2;
      positions[child.id] = { x, y };
      offsetY += childH + V_GAP;
      positionSubtree(child.id);
    });
  }

  /* Execute both passes */
  computeSubtreeHeight('total-order');
  positions['total-order'] = { x: 0, y: 300 };
  positionSubtree('total-order');

  /* Re-center root relative to its children */
  const rootChildren = nodeData.filter(
    (n) => n.parentId === 'total-order' && visibleIds.has(n.id)
  );
  if (rootChildren.length > 0) {
    const childYs = rootChildren.map((c) => positions[c.id]?.y ?? 0);
    const minY = Math.min(...childYs);
    const maxY = Math.max(...childYs);
    positions['total-order'] = { x: 0, y: (minY + maxY) / 2 };
  }

  const rfNodes = visibleNodes.map((n) => ({
    id: n.id,
    type: 'custom',
    position: positions[n.id] || { x: 0, y: 0 },
    data: {
      label: n.label,
      count: n.count,
      amount: n.amount,
      color: n.color,
      link: n.link,
      nodeId: n.id,
      expanded: expandedSet.has(n.id),
    },
  }));

  const rfEdges = visibleNodes
    .filter((n) => n.parentId && visibleIds.has(n.parentId))
    .map((n) => ({
      id: `e-${n.parentId}-${n.id}`,
      source: n.parentId,
      target: n.id,
      type: 'smoothstep',
      animated: true,
      style: {
        stroke: colorMap[n.color]?.border || '#3b82f6',
        strokeWidth: 1.5,
        opacity: 0.6,
      },
    }));

  return { nodes: rfNodes, edges: rfEdges };
}

export default function FlowChart() {
  const [expanded, setExpanded] = useState(new Set(['total-order']));
  const [toast, setToast] = useState(null);
  const layoutConfig = useResponsiveLayout();

  const { nodes: layoutNodes, edges: layoutEdges } = useMemo(
    () => buildLayout(expanded, layoutConfig),
    [expanded, layoutConfig]
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(layoutNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutEdges);

  React.useEffect(() => {
    setNodes(layoutNodes);
    setEdges(layoutEdges);
  }, [layoutNodes, layoutEdges, setNodes, setEdges]);

  /* Show toast notification */
  const showToast = useCallback((message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  /* Single click → expand/collapse */
  const onNodeClick = useCallback((_event, node) => {
    const id = node.id;
    if (!hasChildren(id)) return;

    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        getDescendantIds(id).forEach((did) => next.delete(did));
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  /* Double click → open Google Drive link in a new tab */
  const onNodeDoubleClick = useCallback(
    (_event, node) => {
      const nd = nodeData.find((n) => n.id === node.id);
      if (nd?.link) {
        window.open(nd.link, '_blank', 'noopener,noreferrer');
        showToast(`Opening ${nd.label} in Google Drive`, 'success');
      }
    },
    [showToast]
  );

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onNodeDoubleClick={onNodeDoubleClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.05}
        maxZoom={2.5}
        panOnDrag={true}
        zoomOnPinch={true}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnScroll={false}
        preventScrolling={true}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="rgba(0,0,0,0.07)" gap={32} size={1} variant="dots" />
        <Controls className="flow-controls" showInteractive={false} />
        <MiniMap
          nodeColor={(node) => colorMap[node.data?.color]?.border || '#3b82f6'}
          maskColor="rgba(255,255,255,0.75)"
          className="flow-minimap"
        />
      </ReactFlow>

      {/* Toast notification */}
      {toast && (
        <div className={`toast toast-${toast.type}`}>
          {toast.type === 'loading' && <div className="toast-spinner" />}
          {toast.type === 'success' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
          {toast.type === 'error' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          )}
          <span>{toast.message}</span>
        </div>
      )}
    </>
  );
}

