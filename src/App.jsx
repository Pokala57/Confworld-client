import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import all your components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';


function App() {

  const [conferenceData, setConferenceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from your backend
    const fetchData = async () => {
      try {
        // We use the full URL for the dev server
        // In production, this would be '/api/data'
        const response = await fetch('http://localhost:3001/api/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setConferenceData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                data={conferenceData}
                loading={loading}
                error={error}
              />
            }
          />
          <Route path="/register" element={<RegistrationPage />} />
          {/* Add other routes here, e.g., <Route path="/committee" element={<CommitteePage />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;