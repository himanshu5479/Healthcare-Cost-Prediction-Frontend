import React from "react";
import "../styles/AboutUs.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="aboutus-container">
      <motion.div
        className="aboutus-hero"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Contact Us</h1>
        <p>
          Have questions or feedback? We're here to help you make informed
          healthcare cost decisions.
        </p>
      </motion.div>

      <div className="aboutus-content">
        <motion.div
          className="aboutus-section"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <FaEnvelope className="aboutus-icon" />
          <h3>Email</h3>
          <p>
            Reach out to us anytime at <strong>support@healthpredictor.com</strong>. We
            typically respond within 24 hours.
          </p>
        </motion.div>

        <motion.div
          className="aboutus-section"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <FaPhoneAlt className="aboutus-icon" />
          <h3>Phone</h3>
          <p>
            Call us on <strong>+91-6397318941</strong> from 9am to 6pm (Mon-Sat) for any
            assistance or queries.
          </p>
        </motion.div>

        <motion.div
          className="aboutus-section"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <FaMapMarkerAlt className="aboutus-icon" />
          <h3>Our Office</h3>
          <p>
            HealthPredictor Pvt. Ltd., 2nd Floor, Tech Valley, Bengaluru, India –
            560001.
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

export default ContactUs;
