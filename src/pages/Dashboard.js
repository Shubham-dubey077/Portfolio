import React from "react";
import profileImg from "../assets/profile.png";

function Dashboard() {
  return (
    <div>

      {/* PROFILE */}
      <div className="profile-card">
        <img 
          src={profileImg} alt="Profile"></img> 
        

        <div className="profile-info">
          <h1>Shubham Dubey</h1>

          <p>
            Passionate Web Developer | React Learner
          </p>

          <p>
            Focused on building real-world projects & cracking top tech companies.
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

      {/* PROJECTS */}
      <h2 style={{marginTop: "20px", marginBottom: "10px"}}>My Projects</h2>

      <div className="grid">
        <div className="card">Armstrong</div>
        <div className="card">Calculator</div>
        <div className="card">Counter</div>
        <div className="card">DarkMode</div>
        <div className="card">Palindrome</div>
        <div className="card">Prime</div>
        <div className="card">Stopwatch</div>
        <div className="card">Maps</div>
        <div className="card">Weather</div>
      </div>

    </div>
  );
}

export default Dashboard;