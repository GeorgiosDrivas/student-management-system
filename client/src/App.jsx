import React, { useState, createContext } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import SingleArticle from './components/single-pages/news/SingleArticle';
import Dashboard from './components/dashboard/Dashboard';
import Sidebar from './components/single-pages/Sidebar';
import News from './components/single-pages/news/NewsPage';
import SemesterPage from './components/single-pages/SemesterPage';
import Exercises from './components/single-pages/exercises/Exercises';
import Events from './components/single-pages/EventsPage';
import Settings from './components/single-pages/SettingsPage';
import Login from './components/Login';
import NotFound from './components/NotFound';

export const LoginContext = createContext({});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div className="row">
        {isLoggedIn && (
          <div className='col-12 col-lg-1 p-0'>
            <Sidebar />
          </div>
        )}
        <div className='col-12 col-lg-11 p-0'>
          <Routes>
            <Route path="/" element={!isLoggedIn ? <Navigate to="/login" /> : <Navigate to="/dashboard" />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="semester" element={isLoggedIn ? <SemesterPage /> : <Navigate to="/login" />} />
            <Route path="events" element={isLoggedIn ? <Events /> : <Navigate to="/login" />} />
            <Route path="news" element={isLoggedIn ? <News /> : <Navigate to="/login" />} />
            <Route path="news/:id" element={isLoggedIn ? <SingleArticle /> : <Navigate to="/login" />} />
            <Route path="exercises" element={isLoggedIn ? <Exercises /> : <Navigate to="/login" />} />
            <Route path="settings" element={isLoggedIn ? <Settings /> : <Navigate to="/login" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
