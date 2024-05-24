import React from "react";
import { NavLink } from "react-router-dom";
import "./BottomNavbar.css";

function BottomNavbar() {
  return (
    <div className="bottom-navbar">
      <NavLink to="/" className="nav-item">
        Home
      </NavLink>
      <NavLink to="/gallery" className="nav-item">
        Gallery
      </NavLink>
      <NavLink to="/contact" className="nav-item">
        Contact
      </NavLink>
    </div>
  );
}

export default BottomNavbar;
