import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("user", user);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>
      <input onChange={(e)=>setUser(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;