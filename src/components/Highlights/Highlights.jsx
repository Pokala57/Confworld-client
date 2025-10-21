import React from 'react';
import './Highlights.css';

const Highlights = ({ data }) => {
  return (
    <section className="highlights-section">
      <h2>Key Highlights of ICAEBMS</h2>
      <div className="highlights-grid">
        {data.map((item, index) => (
          <div className="highlight-card" key={index}>
            <span className="highlight-icon">{item.icon}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights