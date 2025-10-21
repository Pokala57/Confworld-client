import React from 'react';
import './Hero.css';

// Pass `data` as a prop
const Hero = ({ data }) => {
  return (
    <div className="hero-section" id="home">
      <div className="hero-scroll-text">
        <span>{data.scrollText}</span>
      </div>
      <div className="hero-content">
        <h1>{data.title}</h1>
        <p className="hero-theme">{data.theme}</p>
        <div className="hero-details">
          {/* Split the details string by '|' to create separate spans */}
          {data.details.split('|').map((item, index) => (
            <span key={index}>{item.trim()}</span>
          ))}
        </div>
        <p className="hero-organizer">{data.organizer}</p>
        <div className="hero-logos">
          <span className="logo-placeholder">CERADA</span>
          <span className="logo-placeholder">ICAEBMS</span>
          <span className="logo-placeholder">SDG</span>
          <span className="logo-placeholder">Scopus</span>
          <span className="logo-placeholder">WoS</span>
        </div>
        <p className="hero-isbn">{data.isbn}</p>
      </div>
    </div>
  );
};

export default Hero;