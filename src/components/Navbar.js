// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Think Dex Logo" className="logo" />
        <div className="brand-text">
          <div className="think">
          <span className="thinks">Think</span>
          <span className="dex"> Dex.</span>
          </div>
          <div className="subtitle">Presented by Dexter Platforms</div>
        </div>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li>Home</li>
          <li>Platforms</li>
          <li>Career Paths</li>
          <li>Student Programs</li>
          <li>Subscribe</li>
        </ul>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
