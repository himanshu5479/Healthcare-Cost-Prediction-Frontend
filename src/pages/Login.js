import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "../styles/Login.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      // Use the backend URL from the .env file
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/login`, // Updated path
        form
      );

      if (res.data?.status === "success" && res.data?.token) {
        setSuccess("Login successful! Redirecting...");
        setError("");
        localStorage.setItem("authToken", res.data.token);

        setTimeout(() => {
          navigate("/predict");
        }, 1000);
      } else {
        setError(res.data.message || "Invalid credentials. Please try again.");
        setSuccess("");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="page-wrapper">
      {/* Main Content */}
      <div className="login-container">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Welcome Back 👋</h2>
          <p className="subtext">Login to continue your healthcare journey</p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
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
              <FaLock className="input-icon" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            {success && <div className="alert alert-success">{success}</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <button type="submit">Login</button>
          </form>

          <div className="extra-text mt-3">
            Don't have an account?{" "}
            <Link to="/signup" className="link-signup">
              Sign Up
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
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
        <p>© 2025 Healthcare Cost Predictor</p>
      </footer>
    </div>
  );
}

export default Login;
