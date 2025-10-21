import React from 'react';
import './Welcome.css';

const Welcome = ({ data }) => {
  return (
    <section className="welcome-section" id="about">
      <h2>{data.title}</h2>
      {/* Map over the paragraphs array */}
      {data.paragraphs.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </section>
  );
};

export default Welcome;