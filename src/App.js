import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Counter from "./pages/Counter";
import Stopwatch from "./pages/Stopwatch";
import ToggleTheme from "./pages/ToggleTheme";
import Palindrome from "./pages/Palindrome";
import Armstrong from "./pages/Armstrong";
import Calculator from "./pages/Calculator";
import Prime from "./pages/Prime";
import Register from "./pages/Register";
import WeatherMap from "./pages/WeatherMap";

import "./styles/main.css";

function App() {
  return (
    <Router>
      
      {/* TOP NAVBAR */}
      <Navbar />

      {/* MAIN LAYOUT */}
      <div className="container">

        {/* LEFT SIDEBAR */}
        <Sidebar />

        {/* RIGHT CONTENT */}
        <div className="main">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/theme" element={<ToggleTheme />} />
            <Route path="/palindrome" element={<Palindrome />} />
            <Route path="/armstrong" element={<Armstrong />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/prime" element={<Prime />} />
            <Route path="/weathermap" element={<WeatherMap />} />
          </Routes>
        </div>

      </div>

      {/* FOOTER */}
      <Footer />

    </Router>
  );
}

export default App;