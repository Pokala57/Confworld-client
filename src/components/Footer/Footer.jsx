import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-col">
          <h3>ICAEBMS-2026</h3>
          <p>International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities</p>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#papers">Call for Papers</a></li>
            <li><a href="#submission">Submission</a></li>
            <li><a href="https://confworld.org">Confworld</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>Confworld Educational Research and Development Association</p>
          <p>Email: info@confworld.org</p>
          <p>Website: www.confworld.org</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Confworld. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;