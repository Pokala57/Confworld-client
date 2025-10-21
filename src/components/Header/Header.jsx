import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-text">ICAEBMS-2026</Link>
        </div>
        
        {/* Hamburger Menu Button for Mobile */}
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✖' : '☰'}
        </button>

        <nav className={`nav-menu ${isOpen ? 'nav-open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <a href="/#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="/#papers" onClick={() => setIsOpen(false)}>Call for Papers</a>
          {/* Use Link for the new page */}
          <Link to="/register" className="nav-register-btn" onClick={() => setIsOpen(false)}>
            Registration
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;