import './App.css'
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import News from './components/sidebar/news/News-sb';
import SemesterSb from './components/sidebar/Semester-sb';
import Logout from './components/sidebar/Logout-sb';
import Exercises from './components/sidebar/exercises/Exercises';
import Events from './components/sidebar/Events-sb';
import Settings from './components/sidebar/Settings-sb';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
        <div className="row">
          <div className='col-12 col-lg-1 p-0'>
            <Sidebar />
          </div>
          <div className='col-12 col-lg-11 p-0'>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/semester" element={<SemesterSb />} />
              <Route path="/events" element={<Events />} />
              <Route path="/news" element={<News />} />
              <Route path="/exercises" element={<Exercises />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App