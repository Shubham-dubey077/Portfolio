import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Counter from "./pages/Counter";
import Stopwatch from "./pages/Stopwatch";
import ToggleTheme from "./pages/ToggleTheme";
import Palindrome from "./pages/Palindrome";
import Armstrong from "./pages/Armstrong";
import Calculator from "./pages/Calculator";
import Prime from "./pages/Prime";
import WeatherMap from "./pages/WeatherMap";

import "./styles/main.css";

function Layout() {
  const location = useLocation();

  const isAuthPage = location.pathname === "/" || location.pathname === "/register";

  return (
    <div className="app-wrapper">

      {/* Navbar only when NOT login/register */}
      {!isAuthPage && <Navbar />}

      <div className="container">
        {!isAuthPage && <Sidebar />}

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

      {/* Footer only when NOT login/register */}
      {!isAuthPage && <Footer />}

    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;