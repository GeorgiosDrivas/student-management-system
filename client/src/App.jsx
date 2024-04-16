import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Sidebar from './components/single-pages/Sidebar';
import News from './components/single-pages/news/NewsPage';
import SemesterSb from './components/single-pages/SemesterPage';
import Exercises from './components/single-pages/exercises/Exercises';
import Events from './components/single-pages/EventsPage';
import Settings from './components/single-pages/SettingsPage';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for authentication token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="row">
      {isLoggedIn && (
        <div className='col-12 col-lg-1 p-0'>
          <Sidebar />
        </div>
      )}
      <div className='col-12 col-lg-11 p-0'>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/semester" element={isLoggedIn ? <SemesterSb /> : <Navigate to="/" />} />
          <Route path="/events" element={isLoggedIn ? <Events /> : <Navigate to="/" />} />
          <Route path="/news" element={isLoggedIn ? <News /> : <Navigate to="/" />} />
          <Route path="/exercises" element={isLoggedIn ? <Exercises /> : <Navigate to="/" />} />
          <Route path="/settings" element={isLoggedIn ? <Settings /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
