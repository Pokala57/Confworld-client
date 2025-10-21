import React from 'react';
import './Theme.css';

const Theme = ({ data }) => {
  return (
    <section className="theme-section">
      <h2>{data.title}</h2>
      <h3>{data.subtitle}</h3>
      <p>{data.paragraph}</p>
      
      <h4>Through this theme, ICAEBMS seeks:</h4>
      <ul>
        {data.seeks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Theme;