import React from 'react';
import './CallForPapers.css';

// Receive tracks and deadlines separately
const CallForPapers = ({ tracks, deadlines }) => {
  return (
    <section className="papers-section" id="papers">
      <h2>Call for Papers</h2>
      <p>We invite researchers, academicians and professionals to submit their papers. Topics of interest include, but are not limited to:</p>
      
      <div className="tracks-container">
        {/* Session Tracks */}
        <div className="tracks-list">
          <h3>Session Tracks</h3>
          <ul>
            {tracks.map((track, index) => (
              <li key={index}>{track}</li>
            ))}
          </ul>
        </div>

        {/* Submission Deadlines */}
        <div className="deadlines-list">
          <h3>Submission Deadlines</h3>
          <ul className="deadline-items">
            {deadlines.map((item, index) => (
              <li key={index}>
                <span>{item.event}</span> {item.date}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="submission-link">For detailed submission guidelines, please visit the <a href="#submission">Submission Page</a>.</p>
    </section>
  );
};

export default CallForPapers;