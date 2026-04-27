import React from 'react';
import FlowChart from './components/FlowChart';

export default function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="header-left">
            <div className="logo-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div>
              <h1 className="header-title">Order Flow Dashboard</h1>
              <p className="header-subtitle">Interactive Order Processing Flowchart</p>
            </div>
          </div>
          <div className="header-right">
            <div className="header-hint">
              <div className="hint-item">
                <kbd>Click</kbd>
                <span>Expand / Collapse</span>
              </div>
              <div className="hint-divider" />
              <div className="hint-item">
                <kbd>Double-click</kbd>
                <span>Open in Google Drive</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Flow canvas */}
      <main className="flow-canvas">
        <FlowChart />
      </main>
    </div>
  );
}
