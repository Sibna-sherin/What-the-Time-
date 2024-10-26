import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/index.js';
import Login from './pages/Login+signup/login.jsx'; // Import the Login component

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} /> {/* Home route */}
        <Route path='/login' element={<Login />} /> {/* Add this route for Login */}
      </Routes>
    </Router>
  );
}

export default App;
