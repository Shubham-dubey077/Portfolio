import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaHome, FaCalculator, FaStopwatch, FaMoon, FaMapMarkerAlt, FaBars } from "react-icons/fa";
import { MdNumbers } from "react-icons/md";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={collapsed ? "sidebar collapsed" : "sidebar"}>

      {/* TOP */}
      <div className="sidebar-top">
        {!collapsed && <h2>Shubham</h2>}

        <button 
          className="toggle-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          <FaBars />
        </button>
      </div>

      {/* LINKS */}
      <nav className="sidebar-links">

        <NavLink to="/dashboard">
          <FaHome /> {!collapsed && "Dashboard"}
        </NavLink>

        <NavLink to="/counter">
          <MdNumbers /> {!collapsed && "Counter"}
        </NavLink>

        <NavLink to="/stopwatch">
          <FaStopwatch /> {!collapsed && "Stopwatch"}
        </NavLink>

        <NavLink to="/theme">
          <FaMoon /> {!collapsed && "Theme"}
        </NavLink>

        <NavLink to="/palindrome">
          <MdNumbers /> {!collapsed && "Palindrome"}
        </NavLink>

        <NavLink to="/armstrong">
          <MdNumbers /> {!collapsed && "Armstrong"}
        </NavLink>

        <NavLink to="/calculator">
          <FaCalculator /> {!collapsed && "Calculator"}
        </NavLink>

        <NavLink to="/prime">
          <MdNumbers /> {!collapsed && "Prime"}
        </NavLink>

        <NavLink to="/weathermap">
          <FaMapMarkerAlt /> {!collapsed && "WeatherMap"}
        </NavLink>

      </nav>
    </div>
  );
}

export default Sidebar;