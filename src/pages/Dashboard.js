import React from "react";
import { useNavigate } from "react-router-dom";
import profileImg from "../assets/profile.png";

import { FaCalculator, FaStopwatch, FaMoon, FaMapMarkerAlt } from "react-icons/fa";
import { MdNumbers } from "react-icons/md";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>

      {/* ===== PROFILE ===== */}
      <div className="profile-card">
        <img src={profileImg} alt="Profile" />

        <div className="profile-info">
          <h1>Shubham Dubey</h1>

          <p>Passionate Web Developer | Frontend Engineer</p>

          <p>
            Focused on building real-world projects & improving problem-solving skills.
          </p>

          <div className="links">
            <a 
              href="https://github.com/Shubham-dubey077" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a 
              href="https://www.linkedin.com/in/shubham-dubey-2b17812ba/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* ===== PROJECTS ===== */}
      <h2 className="section-title">My Projects</h2>

      <div className="grid">

        <div className="card" onClick={() => navigate("/armstrong")}>
          <MdNumbers className="icon" />
          <p>Armstrong</p>
        </div>

        <div className="card" onClick={() => navigate("/calculator")}>
          <FaCalculator className="icon" />
          <p>Calculator</p>
        </div>

        <div className="card" onClick={() => navigate("/counter")}>
          <GiPerspectiveDiceSixFacesRandom className="icon" />
          <p>Counter</p>
        </div>

        <div className="card" onClick={() => navigate("/theme")}>
          <FaMoon className="icon" />
          <p>Dark Mode</p>
        </div>

        <div className="card" onClick={() => navigate("/palindrome")}>
          <MdNumbers className="icon" />
          <p>Palindrome</p>
        </div>

        <div className="card" onClick={() => navigate("/prime")}>
          <MdNumbers className="icon" />
          <p>Prime Checker</p>
        </div>

        <div className="card" onClick={() => navigate("/stopwatch")}>
          <FaStopwatch className="icon" />
          <p>Stopwatch</p>
        </div>

        <div className="card" onClick={() => navigate("/weathermap")}>
          <FaMapMarkerAlt className="icon" />
          <p>Weather + Map</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;