import React, { useState, useEffect } from "react";

function DarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = dark ? "black" : "white";
    document.body.style.color = dark ? "white" : "black";
  }, [dark]);

  return (
    <div>
      <h2>Dark Mode</h2>
      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default DarkMode;