import React, { useState } from 'react'; // Removed useContext for now, use custom hook
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Import the custom hook

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the custom hook to get login function

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError(null);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (typeof login !== 'function') {
      setError("Authentication service is currently unavailable. Please try again later.");
      setLoading(false);
      console.error("Login function is not available in AuthContext.");
      return;
    }

    try {
      // SIMULATE API CALL - Replace with actual fetch
      console.log("Attempting login with:", { email, password });
      // const res = await fetch('/api/auth/login', { // Ensure this API endpoint is correct & proxied
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password })
      // });

      // Mock API response
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      let res, data;
      if (email === "user@example.com" && password === "password") {
        res = { ok: true, status: 200, statusText: "OK" };
        data = { token: "fake-jwt-token-string", user: { id: 1, email: "user@example.com", name: "Test User" } };
      } else {
        res = { ok: false, status: 401, statusText: "Unauthorized" };
        data = { message: "Invalid email or password." };
      }
      // End Mock API response

      if (res.ok) {
        // const data = await res.json(); // Use this with actual fetch
        login(data.token, data.user);
        navigate('/dashboard');
      } else {
        let errorMessage = 'Login failed. Please check your credentials.';
        // try { // Use this with actual fetch
        //   const errorData = await res.json();
        //   errorMessage = errorData.message || `Login failed: ${res.status} ${res.statusText}`;
        // } catch (jsonParseError) {
        //   errorMessage = `Login failed: ${res.status} ${res.statusText}`;
        // }
        errorMessage = data.message || `Login failed: ${res.status} ${res.statusText}`; // For mock
        setError(errorMessage);
      }
    } catch (err) {
      console.error("Login request failed:", err);
      setError('An unexpected network or server error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
        
        {error && (
          <div 
            role="alert" 
            aria-live="assertive"
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded"
          >
            {error}
          </div>
        )}
        
        <div className="mb-4">
          <label htmlFor="email-input" className="sr-only">Email Address</label>
          <input 
            id="email-input" // Changed id to avoid conflict if label is also "email"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow" 
            type="email" 
            placeholder="Email Address (user@example.com)" 
            value={email} 
            onChange={handleEmailChange} 
            required 
            disabled={loading}
            aria-describedby={error ? "error-message-alert" : undefined}
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password-input" className="sr-only">Password</label>
          <input 
            id="password-input" // Changed id
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow" 
            type="password" 
            placeholder="Password (password)" 
            value={password} 
            onChange={handlePasswordChange} 
            required 
            disabled={loading}
            aria-describedby={error ? "error-message-alert" : undefined}
          />
        </div>
        
        {error && <p id="error-message-alert" className="sr-only">{error}</p>}

        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-150 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Logging in...
            </>
          ) : 'Login'}
        </button>
        <p className="text-xs text-gray-500 mt-4 text-center">
          Test with: user@example.com / password
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
