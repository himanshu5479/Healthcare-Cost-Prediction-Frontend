import React from "react";
import "../styles/AboutUs.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaShieldAlt } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="aboutus-container">
      <motion.div
        className="aboutus-hero"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Privacy Policy</h1>
        <p>
          Your privacy is important to us. We are committed to safeguarding your personal information.
        </p>
      </motion.div>

      <div className="aboutus-content">
        <motion.div
          className="aboutus-section"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <FaShieldAlt className="aboutus-icon" />
          <h3>Data Collection</h3>
          <p>
            We collect basic user information to enhance your experience on our platform, including login details and prediction inputs.
          </p>
        </motion.div>

        <motion.div
          className="aboutus-section"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <FaShieldAlt className="aboutus-icon" />
          <h3>Usage of Data</h3>
          <p>
            Your data is used solely for healthcare prediction and user experience optimization. We never share or sell your data.
          </p>
        </motion.div>

        <motion.div
          className="aboutus-section"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <FaShieldAlt className="aboutus-icon" />
          <h3>Security</h3>
          <p>
            We employ industry-standard encryption and authentication practices to keep your information safe and secure.
          </p>
        </motion.div>
      </div>

      <footer className="aboutus-footer">
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="footer-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
        <p className="copyright">© 2025 Healthcare Cost Predictor</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
