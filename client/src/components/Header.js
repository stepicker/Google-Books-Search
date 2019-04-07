import React from "react";

const styles = {
  h1: {
    fontSize: "22pt",
    marginLeft: "10px",
    marginRight: "30px"
  }
}

function Header() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
          <h1 style={styles.h1}>Book Picker</h1>
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