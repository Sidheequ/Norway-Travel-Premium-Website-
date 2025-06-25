import React from 'react';
import './Navbar.css';
import logo from '../../assets/logonorway.png' 
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="logo" className="logo" Link to="/"/>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <button className="nav-button">
          Button
          
        </button>
      </div>
    </header>
  );
}

export default Navbar;
