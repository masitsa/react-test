import React from "react";

const navStyle = {
  cursor: "pointer"
};

//Stateless functional component when we do not need a class
const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        MCM Test
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/users">
              Users
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/resources">
              Resources
            </a>
          </li>
          <li className="nav-item float-right">
            <a
              className="nav-link"
              onClick={() => props.onLogout()}
              style={navStyle}
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
