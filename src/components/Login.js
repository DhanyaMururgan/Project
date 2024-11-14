// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(''); // Clear previous error message

    // Mock login validation
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

    if (email === 'murugandhanya7@gmail.com' && password === '123') {
      // Navigate to home page upon successful login
      navigate('/');
    } else {
      setErrorMessage('Invalid credentials, please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLoginSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" disabled={loading}>
          {loading ? 'Logging In...' : 'Login'}
        </button>
      </form>
      <button className="switch-button" onClick={handleSignupClick}>
        Sign Up
      </button>
    </div>
  );
}

export default Login;
