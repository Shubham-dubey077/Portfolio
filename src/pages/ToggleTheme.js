import React, { useEffect, useState } from "react";

function ToggleTheme() {
  const [dark, setDark] = useState(false);

  // Load saved theme on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setDark(true);
    }
  }, []);

  // Toggle function
  const toggleTheme = () => {
    if (dark) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Theme Switch</h2>

      <button onClick={toggleTheme}>
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

export default ToggleTheme;