import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">

      {/* LEFT SIDE */}
      <h2>My Portfolio</h2>

      {/* RIGHT SIDE */}
      <div>
        <Link to="/dashboard">Home</Link>
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
      </div>

    </div>
  );
}

export default Navbar;