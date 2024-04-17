import React, { useState } from 'react';
import './App.css';
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

  return (
    <div className="row">
      {isLoggedIn && (
        <div className='col-12 col-lg-1 p-0'>
          <Sidebar />
        </div>
      )}
      <div className='col-12 col-lg-11 p-0'>
        <Routes>
          <Route path="/" element={!isLoggedIn ? <Navigate to="/login" /> : <Navigate to="/dashboard" />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/semester" element={isLoggedIn ? <SemesterSb /> : <Navigate to="/login" />} />
          <Route path="/events" element={isLoggedIn ? <Events /> : <Navigate to="/login" />} />
          <Route path="/news" element={isLoggedIn ? <News /> : <Navigate to="/login" />} />
          <Route path="/exercises" element={isLoggedIn ? <Exercises /> : <Navigate to="/login" />} />
          <Route path="/settings" element={isLoggedIn ? <Settings /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
