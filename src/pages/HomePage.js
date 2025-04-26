import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function HomePage() {
  const isLoggedIn = !!localStorage.getItem("authToken");

  return (
    <div className="homepage-container">
      <div className="hero-overlay">
        <h2 className="homepage-heading">Welcome to Healthcare Cost Predictor</h2>
        <div className="homepage-line"></div>
        <p className="homepage-description">
          Estimate your medical expenses with precision. Our Healthcare Cost Predictor leverages your personal health data to generate cost insights, helping you plan better for the future.
        </p>

        <div className="homepage-features">
          <div className="feature-item">
            <h3>Accurate Predictions</h3>
            <p>Receive reliable healthcare cost predictions based on your profile.</p>
          </div>
          <div className="feature-item">
            <h3>Easy to Use</h3>
            <p>Simple and intuitive design to get results in seconds.</p>
          </div>
          <div className="feature-item">
            <h3>Tailored Results</h3>
            <p>Input your personal data to get estimates specific to your needs.</p>
          </div>
        </div>

        <p className="cta-text">
          Start predicting your healthcare costs today and plan your future smarter!
        </p>

        {/* 👇 Conditionally render buttons only when not logged in */}
        {!isLoggedIn && (
          <div className="homepage-buttons">
            <Link to="/login" aria-label="Login to your account">
              <button>Login</button>
            </Link>
            <Link to="/signup" aria-label="Create a new account">
              <button>Sign Up</button>
            </Link>
          </div>
        )}
      </div>

      <footer className="homepage-footer">
        <div className="footer-links">
          {/* Updated links for About Us, Privacy Policy, Terms, and Contact */}
          <Link to="/about">About Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="footer-socials">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
        </div>
        <p className="copyright">© 2025 Healthcare Cost Predictor</p>
      </footer>
    </div>
  );
}

export default HomePage;
