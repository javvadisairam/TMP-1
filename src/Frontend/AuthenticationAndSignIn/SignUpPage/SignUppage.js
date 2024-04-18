import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import './SignUppage.css';

const SignupPage = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    dob: '',
    role: '',
    organization: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false); // State variable to control navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSignup = async () => {
    const validationErrors = {};
    // Check for empty fields
    Object.entries(userData).forEach(([key, value]) => {
      if (value === '' && key !== 'role' && key !== 'organization') {
        validationErrors[key] = 'Please enter a value';
      }
    });
  
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      try {
        await axios.post('http://localhost:5000/api/register', userData);
        alert('User registered successfully');
        setSignupSuccess(true); // Update signupSuccess state variable to true
      } catch (error) {
        console.error('Error signing up:', error.response.data);
        alert('Failed to register user');
      }
    }
    setSubmitted(true);
  };
  

  return (
    <div className='sign-up'>
    <div className="signup-container">
      {signupSuccess && <Navigate to="/SignupSuccessPage" />} {/* Conditional rendering of Navigate component */}
      <h2>Signup Page</h2>
      <div className="signup-input-group">
        <input className={`signup-input${submitted && !userData.username ? ' error' : ''}`} type="text" name="username" placeholder="Username" value={userData.username} onChange={handleChange} />
        <input className={`signup-input${submitted && !userData.email ? ' error' : ''}`} type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} />
        <input className={`signup-input${submitted && !userData.password ? ' error' : ''}`} type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} />
        <input className={`signup-input${submitted && !userData.dob ? ' error' : ''}`} type="date" name="dob" value={userData.dob} onChange={handleChange} />
        <input className={`signup-input${submitted && !userData.role ? ' error' : ''}`} type="text" name="role" placeholder="Role" value={userData.role} onChange={handleChange} />
        <input className={`signup-input${submitted && !userData.organization ? ' error' : ''}`} type="text" name="organization" placeholder="Organization" value={userData.organization} onChange={handleChange} />
      </div>
      <button className="signup-button" onClick={handleSignup}>Signup</button>
      {submitted && errors.organization && <div className="error-message">{errors.organization}</div>}
      </div>
    </div>
  );
};

export default SignupPage;
