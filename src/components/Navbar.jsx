import React from "react";
import "../styling/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="website-name">SQUAD 76</h1>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><a href="#members">Members</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="reachus-button">Reach Us</button>
      </div>
    </nav>
  );
}

export default Navbar;
