// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

function Signup() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrorMessage(''); // Clear any error message on input change
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Basic validation
    if (!formValues.name || !formValues.email || !formValues.password) {
      setErrorMessage('All fields are required.');
      setLoading(false);
      return;
    }

    // Mock sign-up process (you can replace this with actual API call)
    try {
      // Simulating an async signup process
      await new Promise((resolve) => setTimeout(resolve, 2000));
      navigate('/login'); // Navigate to the login page on success
    } catch (error) {
      setErrorMessage('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSignupSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formValues.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleInputChange}
          required
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      <button className="switch-button" onClick={handleLoginClick}>Login</button>
    </div>
  );
}

export default Signup;
