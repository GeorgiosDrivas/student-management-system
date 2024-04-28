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
    <Routes>
      <Route path="/login" element={<Login />} />
      <ProtectedRoute path="/">
        <div className="row">
          <div className='col-12 col-lg-1 p-0'>
            <Sidebar />
          </div>
          <div className='col-12 col-lg-11 p-0'>
            <Dashboard />
            <SemesterPage />
            <Events />
            <News />
            <SingleArticle />
            <Exercises />
            <Settings />
            <NotFound default />
          </div>
        </div>
      </ProtectedRoute>
    </Routes>
  );
}

export default App;