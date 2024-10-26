import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div >
      <h1>Log In to Your Time Machine</h1>
      <Link to="/login">Go to Login</Link> {/* Link to the Login page */}
    </div>
  );
};

export default Home;
