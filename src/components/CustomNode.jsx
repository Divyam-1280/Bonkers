import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { colorMap, hasChildren } from '../flowData';

function CustomNode({ data }) {
  const palette = colorMap[data.color] || colorMap.blue;
  const isParent = hasChildren(data.nodeId);
  const isExpanded = data.expanded;

  return (
    <div
      className={`custom-node ${isParent ? 'parent-node' : 'leaf-node'} ${isExpanded ? 'expanded' : ''}`}
      style={{
        '--node-bg': palette.bg,
        '--node-border': palette.border,
        '--node-text': palette.text,
        '--node-accent': palette.accent,
      }}
      title={isParent ? 'Click to expand · Double-click to open in Drive' : 'Double-click to open in Drive'}
    >
      {/* Left handle */}
      <Handle
        type="target"
        position={Position.Left}
        className="node-handle"
      />

      {/* Accent bar */}
      <div className="node-accent-bar" />

      <div className="node-content">
        <div className="node-icon">
          {isParent ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          )}
        </div>

        <div className="node-label-group">
          <span className="node-label">
            {data.label}
          </span>
          {data.count != null && (
            <span className="node-count">
              {data.count.toLocaleString()} {data.amount && `(₹${data.amount})`}
            </span>
          )}
        </div>

        {isParent && (
          <span className="expand-chevron">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points={isExpanded ? '6 9 12 15 18 9' : '9 18 15 12 9 6'} />
            </svg>
          </span>
        )}
      </div>

      {/* Right handle */}
      <Handle
        type="source"
        position={Position.Right}
        className="node-handle"
      />
    </div>
  );
}

export default memo(CustomNode);
