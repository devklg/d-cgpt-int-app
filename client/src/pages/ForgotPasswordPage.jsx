import React from "react";

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy text-white">
      <div className="max-w-md w-full p-8 bg-darkNavy rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Forgot Your Password?</h1>
        <p className="mb-6">We'll email you a reset link.</p>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 mb-4 rounded text-navy"
          />
          <button
            type="submit"
            className="w-full bg-gold text-navy p-3 rounded font-semibold"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;


