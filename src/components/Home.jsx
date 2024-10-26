import React from 'react';
import './home.css'; // Import the CSS file

const Home = () => {
  const goToFuture = () => {
    // Logic for navigating to the future page
  };

  const goToPast = () => {
    // Logic for navigating to the past page
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="Logo White.png" alt="My Logo" className="logo-image" />
        </div>
        <ul className="nav-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="home-text">Where in Time Do You Want to Go...?</div> 

      {/* Floating buttons for navigation */}
      <button className="time-button future" onClick={goToFuture}>Future</button>
      <button className="time-button past" onClick={goToPast}>Past</button>
    </div>
  );
};

export default Home;
