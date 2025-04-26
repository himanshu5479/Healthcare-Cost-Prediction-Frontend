import React from "react";
import "../styles/AboutUs.css";
import { FaHeartbeat, FaLaptopMedical, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <motion.div
        className="aboutus-hero"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>About Us</h1>
        <p>
          Empowering individuals with smart healthcare cost predictions using
          AI-driven insights.
        </p>
      </motion.div>

      <div className="aboutus-content">
        <motion.div
          className="aboutus-section"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <FaHeartbeat className="aboutus-icon" />
          <h3>Our Mission</h3>
          <p>
            To revolutionize the way people understand and plan for healthcare
            expenses by offering personalized and accurate cost predictions. We
            strive to make healthcare financial planning accessible and
            intuitive.
          </p>
        </motion.div>

        <motion.div
          className="aboutus-section"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <FaLaptopMedical className="aboutus-icon" />
          <h3>How It Works</h3>
          <p>
            Our intelligent algorithm uses your health inputs like age, glucose
            levels, BMI, and more to provide you a realistic estimate of
            potential medical costs. This enables you to plan ahead and make
            informed decisions.
          </p>
        </motion.div>

        <motion.div
          className="aboutus-section"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <FaChartLine className="aboutus-icon" />
          <h3>Why It Matters</h3>
          <p>
            Rising healthcare costs can be overwhelming. Our tool helps you gain
            clarity and control over your potential expenses, giving you peace
            of mind and helping you financially prepare for any situation.
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

export default AboutUs;
