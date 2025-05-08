import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PreEnroll from "./pages/PreEnroll";
import PromoterDashboard from "./pages/PromoterDashboard";
import PublicSite from "./pages/PublicSite";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pre-enroll" element={<PreEnroll />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/dashboard" element={<ProtectedRoute><PromoterDashboard /></ProtectedRoute>} />
        <Route path="/public/:referralCode" element={<PublicSite />} />
        <Route path="*" element={<div className="text-white text-center py-12">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
