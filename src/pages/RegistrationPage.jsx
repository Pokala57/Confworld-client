import React, { useState } from 'react';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: '',
    paperTitle: '',
    presentationType: 'oral',
  });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);

    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Registration failed');
      }

      // Success
      setMessage('Registration successful! We will contact you shortly.');
      setIsError(false);
      setFormData({
        name: '',
        email: '',
        affiliation: '',
        paperTitle: '',
        presentationType: 'oral',
      });
    } catch (error) {
      setMessage(error.message);
      setIsError(true);
    }
  };

  return (
    <div className="container">
      <section className="registration-section">
        <h2>Register for ICAEBMS-2026</h2>
        <p>Please fill out the form below to register for the conference.</p>

        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="affiliation">Affiliation (University/Company)</label>
            <input
              type="text"
              id="affiliation"
              name="affiliation"
              value={formData.affiliation}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="paperTitle">Paper Title (if any)</label>
            <input
              type="text"
              id="paperTitle"
              name="paperTitle"
              value={formData.paperTitle}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="presentationType">Presentation Type</label>
            <select
              id="presentationType"
              name="presentationType"
              value={formData.presentationType}
              onChange={handleChange}
            >
              <option value="oral">Oral Presentation</option>
              <option value="poster">Poster Presentation</option>
              <option value="virtual">Virtual Presentation</option>
              <option value="attendee">Attendee Only</option>
            </select>
          </div>
          
          {message && (
            <div className={`form-message ${isError ? 'error' : 'success'}`}>
              {message}
            </div>
          )}

          <button type="submit" className="submit-btn">Register Now</button>
        </form>
      </section>
    </div>
  );
};

export default RegistrationPage;