import React from "react";
import "../styles/AboutUs.css";
import { FaFileContract, FaShieldAlt, FaUserShield } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const TermsOfService = () => {
  return (
    <div className="aboutus-container">
      <motion.div
        className="aboutus-hero"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Terms of Service</h1>
        <p>
          Please read our terms and conditions carefully before using the
          Healthcare Cost Predictor platform.
        </p>
      </motion.div>

      <div className="aboutus-content">
        <motion.div
          className="aboutus-section"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <FaFileContract className="aboutus-icon" />
          <h3>Acceptance of Terms</h3>
          <p>
            By using our platform, you agree to be bound by these terms. If you
            do not agree to any part of these terms, you may not access the
            service.
          </p>
        </motion.div>

        <motion.div
          className="aboutus-section"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <FaShieldAlt className="aboutus-icon" />
          <h3>User Responsibilities</h3>
          <p>
            You agree not to misuse the platform. You are responsible for the
            accuracy of the health inputs and any decisions based on our
            predictions.
          </p>
        </motion.div>

        <motion.div
          className="aboutus-section"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <FaUserShield className="aboutus-icon" />
          <h3>Limitation of Liability</h3>
          <p>
            While we strive for accuracy, we do not guarantee exact predictions.
            The platform is intended for informational purposes only and does
            not replace professional medical advice.
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

export default TermsOfService;
