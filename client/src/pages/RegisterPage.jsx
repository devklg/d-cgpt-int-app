import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Assuming useAuth custom hook is available

// Define your default referrer name as a constant
const DEFAULT_ADMIN_REFERRER_NAME = 'Magnificent Worldwide Marketing Group';
// Alternatively:
// const DEFAULT_ADMIN_REFERRER_NAME = 'Kevin Gardner - Admin';

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { referralCode } = useParams(); // Gets referralCode from URL like /register/:referralCode
  const { login } = useAuth(); // Use the custom hook to get login function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
    if (error) setError(null); // Clear error on any input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors before new submission
    setLoading(true);

    if (typeof login !== 'function') {
      setError("Authentication service is currently unavailable. Please try again later.");
      setLoading(false);
      console.error("Login function is not available from useAuth.");
      return;
    }

    // Construct the payload for the API
    const payload = {
      ...form,
      referrer: referralCode || DEFAULT_ADMIN_REFERRER_NAME
    };

    try {
      // Replace with your actual API endpoint
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const data = await res.json();
        login(data.token, data.user); // Log the user in with the token and user data
        navigate('/onboarding');    // Navigate to onboarding or dashboard
      } else {
        let errorMessage = 'Registration failed. Please check your details and try again.';
        try {
          // Attempt to parse a JSON error response from the server
          const errorData = await res.json();
          errorMessage = errorData.message || `Registration failed: ${res.status} ${res.statusText}`;
        } catch (jsonParseError) {
          // If the error response wasn't JSON, use the status text
          errorMessage = `Registration failed: ${res.status} ${res.statusText}`;
        }
        setError(errorMessage);
      }
    } catch (err) {
      // Catch network errors or other unexpected issues during fetch
      console.error("Registration request failed:", err);
      setError('An unexpected network or server error occurred. Please try again.');
    } finally {
      setLoading(false); // Ensure loading is set to false in all cases
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">Join the Powerline</h2>

        {error && (
          <div
            role="alert"
            aria-live="assertive" // Informs screen readers immediately of the error
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded text-sm"
          >
            {error}
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="name-input" className="sr-only">Full Name</label>
          <input
            id="name-input"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            disabled={loading}
            aria-describedby={error ? "error-message-alert" : undefined}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email-input" className="sr-only">Email Address</label>
          <input
            id="email-input"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            disabled={loading}
            aria-describedby={error ? "error-message-alert" : undefined}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone-input" className="sr-only">Phone Number</label>
          <input
            id="phone-input"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
            name="phone"
            type="tel" // Correct type for telephone numbers
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required // Consider if phone is optional or add specific format validation
            disabled={loading}
            aria-describedby={error ? "error-message-alert" : undefined}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password-input" className="sr-only">Password</label>
          <input
            id="password-input"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            disabled={loading}
            aria-describedby={error ? "error-message-alert" : undefined}
          />
        </div>

        {/* This ID is used by aria-describedby for general form errors */}
        {error && <p id="error-message-alert" className="sr-only">{error}</p>}

        {/* Consider adding a "Confirm Password" field for better UX */}

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-150 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Registering...
            </>
          ) : 'Register'}
        </button>

        {referralCode && (
          <p className="text-xs text-gray-500 mt-4 text-center">
            Referred by: {referralCode}
          </p>
        )}
      </form>
    </div>
  );
};

export default RegisterPage;
