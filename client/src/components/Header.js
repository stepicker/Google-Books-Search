import React from "react";

function Header() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          <h1>Book Picker</h1>
        </a>
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Search
          </a>
          <a className="navbar-item" href="/saved">
            Saved
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;