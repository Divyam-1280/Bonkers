import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

export default function ExcelViewer({ file, onClose }) {
  const [sheets, setSheets] = useState([]);
  const [activeSheet, setActiveSheet] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!file) return;
    setLoading(true);
    setError(null);

    const url = `/files/${encodeURIComponent(file)}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`File not found: ${file}`);
        return res.arrayBuffer();
      })
      .then((buf) => {
        const wb = XLSX.read(buf, { type: 'array' });
        const parsed = wb.SheetNames.map((name) => {
          const ws = wb.Sheets[name];
          const json = XLSX.utils.sheet_to_json(ws, { header: 1 });
          return { name, rows: json };
        });
        setSheets(parsed);
        setActiveSheet(0);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [file]);

  if (!file) return null;

  return (
    <div className="excel-overlay" onClick={onClose}>
      <div className="excel-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="excel-header">
          <div className="excel-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span>{file}</span>
          </div>
          <button className="excel-close" onClick={onClose}>✕</button>
        </div>

        {/* Sheet tabs */}
        {sheets.length > 1 && (
          <div className="sheet-tabs">
            {sheets.map((s, i) => (
              <button
                key={s.name}
                className={`sheet-tab ${i === activeSheet ? 'active' : ''}`}
                onClick={() => setActiveSheet(i)}
              >
                {s.name}
              </button>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="excel-content">
          {loading && (
            <div className="excel-loading">
              <div className="spinner" />
              <p>Loading spreadsheet…</p>
            </div>
          )}

          {error && (
            <div className="excel-error">
              <p>⚠ {error}</p>
            </div>
          )}

          {!loading && !error && sheets[activeSheet] && (
            <div className="table-wrapper">
              <table className="excel-table">
                <thead>
                  {sheets[activeSheet].rows.length > 0 && (
                    <tr>
                      {sheets[activeSheet].rows[0].map((cell, ci) => (
                        <th key={ci}>{cell ?? ''}</th>
                      ))}
                    </tr>
                  )}
                </thead>
                <tbody>
                  {sheets[activeSheet].rows.slice(1, 501).map((row, ri) => (
                    <tr key={ri}>
                      {sheets[activeSheet].rows[0].map((_, ci) => (
                        <td key={ci}>{row[ci] ?? ''}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {sheets[activeSheet].rows.length > 501 && (
                <p className="row-limit-notice">Showing first 500 rows of {sheets[activeSheet].rows.length - 1}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
