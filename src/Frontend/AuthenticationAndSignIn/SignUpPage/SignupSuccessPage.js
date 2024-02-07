import React from 'react';
import { Link } from 'react-router-dom';
import './SignupSuccessPage.css'; // Import the CSS file

const SignupSuccessPage = () => {
  return (
    <div className="signup-success-container">
      <div className="signup-success-heading">Signup Successful</div>
      <div className="signup-success-text">Congratulations! Your account has been successfully created.</div>
      <div className="signup-success-text">You can now sign in using your credentials.</div>
      <Link to="/" className="signup-success-link">Sign In</Link>
    </div>
  );
};

export default SignupSuccessPage;
