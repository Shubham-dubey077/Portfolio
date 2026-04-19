import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const projects = [
    { name: "Counter", path: "/counter" },
    { name: "Stopwatch", path: "/stopwatch" },
    { name: "Theme", path: "/theme" },
    { name: "Palindrome", path: "/palindrome" },
    { name: "Armstrong", path: "/armstrong" },
    { name: "Calculator", path: "/calculator" },
    { name: "WeatherMap", path: "/weathermap"}
  ];

  return (
    <div>
      <h1>Dashboard</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "20px"
      }}>
        {projects.map((p, i) => (
          <div className="card" key={i}>
            <h3>{p.name}</h3>
            <Link to={p.path}>
              <button>Open</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;