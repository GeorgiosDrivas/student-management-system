import './App.css'
import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import News from './components/News';
import SemesterSb from './components/sidebar/Semester-sb';
import Logout from './components/sidebar/Logout-sb';
import Events from './components/dashboard/Events';
import Settings from './components/sidebar/Settings-sb';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  const [users, setUsers] = useState([]); // State to hold the users data

  useEffect(() => {
    // Fetch users data when the component mounts
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/students');
        if (!response.ok) {
          throw new Error('Failed to fetch students data');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError('Failed to fetch students data');
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Router>
        <div className="row">
          <div className='col-12 col-lg-1 p-0'>
            <Sidebar />
          </div>
          <div className='col-12 col-lg-7'>
            <Routes>
              <Route exact path="/" element={<Dashboard data={users} />} />
              <Route path="/semester" element={<SemesterSb data={users} />} />
              <Route path="/events" element={<Events user={users} />} />
              <Route path="/news" element={<News user={users} />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
          <div className="col-12 col-lg-4">
            <div className='left-sidebar position-fixed'>
              <News user={users} />
              <Events user={users} />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App
