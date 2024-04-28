import './App.css';
import { Route, Routes } from 'react-router-dom';
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
import ProtectedRoute from './ProtectedRoute';
import { useAuth } from './AuthContext';

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