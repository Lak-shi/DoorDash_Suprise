import React from 'react';

function Header({ showReset, onReset }) {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-text">DoorDash</span>
          <span className="feature-badge">Surprise Me Friday</span>
        </div>
        {/* ✅ Hide restart button when confirming an order */}
        {showReset && (
          <button className="restart-button" onClick={onReset}>
            🔄 Restart
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
