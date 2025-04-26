import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeartbeat, FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  // Initialize menu state based on localStorage, defaulting to false (closed)
  const [menuOpen, setMenuOpen] = useState(
    JSON.parse(localStorage.getItem("menuOpen")) || false
  );

  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("authToken");

  // Handle logout logic
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
    setMenuOpen(false); // Close menu on logout
  };

  // Toggle menu open/close
  const toggleMenu = () => {
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);
    localStorage.setItem("menuOpen", JSON.stringify(newMenuState)); // Persist state in localStorage
  };

  useEffect(() => {
    // Optionally, you can log or track when the menu state changes
    console.log("Menu state changed:", menuOpen);
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaHeartbeat size={32} className="logo-icon" />
        <span className="app-name">Health Cost Predictor</span>
      </div>

      {/* Hamburger Icon */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {/* Sidebar for links */}
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        {isLoggedIn ? (
          <>
            <Link to="/predict" onClick={toggleMenu}>Predictor</Link>
            <button className="nav-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={toggleMenu}>Login</Link>
            <Link to="/signup" onClick={toggleMenu}>Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
