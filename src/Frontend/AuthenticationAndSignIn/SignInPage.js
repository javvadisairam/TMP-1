import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { signIn } from './AuthService';
import './SignInPage.css';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    try {
      const userData = { username, password };
      const token = await signIn(userData);
      setLoggedIn(true);
    } catch (error) {
      console.error('Error signing in:', error.message);
      setError('Failed to sign in. Please try again.');
    }
  };

  if (loggedIn) {
    return <Navigate to={`/main?username=${username}`} />;
  }

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="heading">Task Management Platform</h2>
        <form className="form" onSubmit={handleSignIn}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="submit-button">Sign In</button>
        </form>
        {error && <div className="error-message">{error}</div>}
        <div>
          <span>Don't have an account? </span>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
