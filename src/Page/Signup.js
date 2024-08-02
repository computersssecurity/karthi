import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const navi = useNavigate();
  
  // State to manage form inputs and errors
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // If no errors, navigate to home page
      navi("/");
    } else {
      setErrors(validationErrors); // Set the errors to state
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-form-container">
        <h1>Sign Up</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
          {errors.username && <span className="error">{errors.username}</span>}
          
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          {errors.email && <span className="error">{errors.email}</span>}
          
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          {errors.password && <span className="error">{errors.password}</span>}
          
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
