import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import { baseUrl } from './const';

// --- NEW IMPORTS ---
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [conferenceData, setConferenceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from your backend
    const fetchData = async () => {
      try {
        // Using http://localhost:3001 for dev
        const response = await fetch(`${baseUrl}/api/data`);
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
      {/* --- ADD THIS COMPONENT --- */}
      <ToastContainer
        position="top-right"
        autoClose={3000} // Auto close after 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
      {/* --------------------------- */}
      
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
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;