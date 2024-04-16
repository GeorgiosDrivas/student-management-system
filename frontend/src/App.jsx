import './App.css'
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import News from './components/single-pages/news/News-sb';
import SemesterSb from './components/single-pages/Semester-sb';
import Exercises from './components/single-pages/exercises/Exercises';
import Events from './components/single-pages/Events-sb';
import Settings from './components/single-pages/Settings-sb';
import Login from './Login';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <>
      {
        !isLoginPage ? (
          <div className="row">
            <div className='col-12 col-lg-1 p-0'>
              <Sidebar />
            </div>
            <div className='col-12 col-lg-11 p-0'>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/semester" element={<SemesterSb />} />
                <Route path="/events" element={<Events />} />
                <Route path="/news" element={<News />} />
                <Route path="/exercises" element={<Exercises />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        )
      }
    </>
  );
};

export default App