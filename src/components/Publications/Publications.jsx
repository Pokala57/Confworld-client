import React from 'react';
import './Publications.css';

const Publications = ({ data }) => {
  return (
    <section className="publications-section">
      <h2>Proceedings & Publications</h2>
      <div className="pub-logos">
        <span className="logo-placeholder">Scopus</span>
        <span className="logo-placeholder">SCIE</span>
        <span className="logo-placeholder">Web of Science</span>
        <span className="logo-placeholder">Clarivate</span>
      </div>
      <p className="pub-note">
        <strong>Note:</strong> {data.note}
      </p>
    </section>
  );
};

export default Publications;