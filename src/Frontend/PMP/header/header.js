import React, { useState } from 'react';
import './header.css'; // Import your CSS file for styling

const Header = ({ username, userPhoto, onLogout }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>TMP<span className='name-real'>(Task Management Platform)</span></h1>
        <div className="user-info">
          <img src='https://randomuser.me/api/portraits/men/1.jpg' alt="User" className="user-photo" onClick={togglePopup} />
          <span className="username">{username}</span>
          <button className="logout-button" onClick={onLogout}>Logout</button>
        </div>
      </div>
      {showPopup && (
        <div className="popup" onClick={togglePopup}>
          <img src='https://randomuser.me/api/portraits/men/1.jpg' alt="Enlarged User" className="enlarged-user-photo" />
        </div>
      )}
    </header>
  );
};

export default Header;



