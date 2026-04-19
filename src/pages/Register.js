import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Register Page</h2>
      <input
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />
      <button onClick={() => alert("Registered: " + name)}>Submit</button>
    </div>
  );
}

export default Register;