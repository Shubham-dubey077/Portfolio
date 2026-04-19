import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Shubham</h2>

      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/stopwatch">Stopwatch</NavLink>
      <NavLink to="/theme">ToggleTheme</NavLink>
      <NavLink to="/palindrome">Palindrome</NavLink>
      <NavLink to="/armstrong">Armstrong</NavLink>
      <NavLink to="/calculator">Calculator</NavLink>
      <NavLink to="/prime">Prime</NavLink>
      <NavLink to="/weathermap">Weather + Map</NavLink>
    </div>
  );
}

export default Sidebar;