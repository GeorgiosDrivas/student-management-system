import './App.css'
import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import News from './components/News';
import Events from './components/dashboard/Events';
function App() {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchUserData = () => {
    fetch("http://localhost:3000/students")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      });
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
    <div className="row">
      <div className='col-12 col-lg-2 p-0'>
        <Sidebar/>
      </div>
      <div className='col-12 col-lg-8'>
        <Dashboard data={users} />
      </div>
      <div className="col-12 col-lg-2">
        <div className='left-sidebar position-fixed'>
          <News user={users} />
          <Events user={users} />
        </div>
      </div>
    </div>
    </>
  )
}

export default App