import { useState, useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    document.body.classList.add('theme-cyber-navy');
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="rounded-lg border border-[var(--panel-border)] bg-[var(--card-bg)] p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-[var(--accent-blue)]">
          Hello React
        </h1>
        <p className="mt-4 text-[var(--text-muted)]">
          Jeongdo Map Project
        </p>
      </div>
    </div>
  );
}

export default App;
