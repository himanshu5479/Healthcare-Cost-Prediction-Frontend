import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Predictor.css";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";
//import {  FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Predictor() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    age: "",
    sex: "",
    bmi: "",
    children: "",
    smoker: "",
    region: "",
    disease: "",
  });

  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) navigate("/login");
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePredict = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/predict`,
        {
          ...form,
          age: Number(form.age),
          bmi: Number(form.bmi),
          children: Number(form.children),
        },
        {
          headers: {
            ...(token && { Authorization: `Bearer ${token}` }),
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setResult(res.data.predicted_cost);
    } catch (error) {
      console.error("Prediction Error:", error);
      setResult("Error: " + (error.response?.data?.message || "Try again later."));
    } finally {
      setIsLoading(false);
    }
  };

  const formatCurrency = (cost) => {
    if (isNaN(cost)) return "Invalid Cost";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(cost);
  };

  return (
    <motion.div
      className="predictor-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="predictor-form"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-4">Health Cost Predictor</h2>
        <form onSubmit={handlePredict} >
        {["age", "bmi", "children"].map((field) => (
  <div className="input-group" key={field}>
    <input
      type="number"
      name={field}
      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
      className="form-control"
      value={form[field]}
      onChange={handleChange}
      required
    />
  </div>
))}


          {/* Grouped Dropdowns Row */}
          <div className="dropdown-row">
            <select name="sex" value={form.sex} onChange={handleChange} required>
              <option value="">Select Sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <select name="smoker" value={form.smoker} onChange={handleChange} required>
              <option value="">Smoker?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <select name="region" value={form.region} onChange={handleChange} required>
              <option value="">Select Region</option>
              <option value="southwest">Southwest</option>
              <option value="southeast">Southeast</option>
              <option value="northwest">Northwest</option>
              <option value="northeast">Northeast</option>
            </select>
          </div>
          <div class="disease-dropdown">
          <select
            name="disease"
            className="form-control"
            value={form.disease}
            onChange={handleChange}
            required
          >
            <option value="">Select Disease</option>
            <option value="Cancer">Cancer</option>
            <option value="Chronic Kidney Disease">Chronic Kidney Disease</option>
            <option value="Heart Disease">Heart Disease</option>
            <option value="Organ Transplant">Organ Transplant</option>
            <option value="Stroke">Stroke</option>
          </select>
          </div>
           <div class="disease-dropdown">
          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? <FaSpinner className="spin" /> : "Predict"}
          </button>
          </div>
        </form>

        {result && (
  <motion.div
    className="result"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <p style={{ fontWeight: "bold", fontSize: "1.2rem", marginBottom: "10px" }}>
      🧾 Estimated Health Expense:
    </p>
    <p style={{ fontSize: "1.5rem", color: "#007bff", fontWeight: "bold" }}>
      {formatCurrency(parseFloat(result))}
    </p>

    <p className="extra-text">
      Based on your inputs, this is the estimated healthcare cost associated with <strong>{form.disease}</strong>. 
      Remember, factors like smoking and region can influence costs significantly.
    </p>

    {form.smoker === "yes" && (
      <p className="extra-text" style={{ color: "#d00000" }}>
        🚭 Tip: Quitting smoking can lower your long-term medical expenses.
      </p>
    )}

    {form.bmi > 27 && (
      <p className="extra-text" style={{ color: "#e85d04" }}>
        ⚠️ Note: A high BMI may increase your health risks. Consider consulting a dietician or fitness expert.
      </p>
    )}
  </motion.div>
)}

      </motion.div>
      
    </motion.div>
    
  );
}

export default Predictor;
