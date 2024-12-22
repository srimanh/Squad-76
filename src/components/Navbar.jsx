import React from "react";
import "../styling/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left section of the navbar */}
      <div className="navbar-left">
        {/* Website Name */}
        <h1 className="website-name">SQUAD 76</h1>
      </div>

      {/* Center section of the navbar for navigation links */}
      <div className="navbar-center">
        <ul className="nav-links">
          {/* Navigation links */}
          <li><a href="#members">Members</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </div>

      {/* Right section of the navbar with a button */}
      <div className="navbar-right">
        {/* Reach Us button */}
        <button className="reachus-button">Reach Us</button>
      </div>
    </nav>
  );
}

export default Navbar;
