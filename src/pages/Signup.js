import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
//import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import "../styles/Signup.css";
import { FaEnvelope, FaLock, FaFacebookF, FaTwitter, FaInstagram,FaUser } from "react-icons/fa";

function Signup() {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.email || !form.username || !form.password || !form.confirmPassword) {
      setError("Please fill in all the fields.");
      setLoading(false);
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, form);
      if (res.data.status === "success") {
        navigate("/predict");
      } else {
        setError(res.data.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message || "Signup failed. Please try again.");
      } else {
        setError("Signup failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <motion.div
        className="card"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-center mb-2">Create an Account 🚀</h2>
        <p className="subtext">Join us and take the first step towards better healthcare 💙</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <button type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <div className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </motion.div>

        <footer className="homepage-footer">
              <div className="footer-links">
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

export default Signup;
