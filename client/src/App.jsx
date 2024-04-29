import { lazy } from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from './AuthContext';

const SingleArticle = lazy(() => import("./components/single-pages/news/SingleArticle"));
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const Sidebar = lazy(() => import("./components/single-pages/Sidebar"));
const News = lazy(() => import("./components/single-pages/news/NewsPage"));
const SemesterPage = lazy(() => import("./components/single-pages/SemesterPage"));
const Exercises = lazy(() => import("./components/single-pages/exercises/Exercises"));
const Events = lazy(() => import("./components/single-pages/EventsPage"));
const Settings = lazy(() => import("./components/single-pages/SettingsPage"));
const Login = lazy(() => import("./components/Login"));
const NotFound = lazy(() => import("./components/NotFound"));
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));


function App() {

  const { isAuthenticated } = useAuth();

  return (
    isAuthenticated ? (
      <ProtectedRoute>
        <div className="row">
          <div className='col-12 col-lg-1 p-0'>
            <Sidebar />
          </div>
          <div className='col-12 col-lg-11 p-0'>
            <Routes>
              {/* Routes for authenticated users */}
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/semester" element={<SemesterPage />} />
              <Route path="/events" element={<Events />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<SingleArticle />} />
              <Route path="/exercises" element={<Exercises />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </ProtectedRoute>
    ) : (
      <ProtectedRoute>
        {/* Routes for unauthenticated users */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/semester" element={<SemesterPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<SingleArticle />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ProtectedRoute>
    )
  )
}

export default App;