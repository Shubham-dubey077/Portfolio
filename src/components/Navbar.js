import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  // 👉 Login page par navbar hide
  if (location.pathname === "/") return null;

  return (
    <header className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        <h2 className="logo">Shubham</h2>
      </div>

      {/* RIGHT */}
      <nav className="nav-right">
        <NavLink to="/dashboard">Home</NavLink>
        <NavLink to="/">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>

    </header>
  );
}

export default Navbar;