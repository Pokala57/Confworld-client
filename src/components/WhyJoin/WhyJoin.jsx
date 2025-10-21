import React from 'react';
import './WhyJoin.css';

const WhyJoin = ({ data }) => {
  return (
    <section className="why-join-section">
      <h2>Why Join Us at ICAEBMS?</h2>
      <p>{data.intro}</p>
      
      <h3>Benefits of Joining ICAEBMS</h3>
      <ul className="benefits-list">
        {data.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </section>
  );
};

export default WhyJoin;