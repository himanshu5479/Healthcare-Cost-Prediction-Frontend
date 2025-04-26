// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";           // ✅ updated
import Home from "./pages/HomePage";               // ✅ updated
import Login from "./pages/Login";                 // ✅ updated
import Signup from "./pages/Signup";               // ✅ updated
import PredictCost from "./pages/Predictor";       // ✅ updated
import PrivateRoute from "./components/PrivateRoute"; // ✅ updated
import AboutUs from "./pages/AboutUs";             // ✅ added
import PrivacyPolicy from "./pages/PrivacyPolicy"; // ✅ added
import TermsOfService from "./pages/TermsOfService"; // ✅ added
import ContactUs from "./pages/ContactUs";         // ✅ added

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* 🔐 Protected Route */}
        <Route
          path="/predict"
          element={
            <PrivateRoute>
              <PredictCost />
            </PrivateRoute>
          }
        />

        {/* Static Pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
