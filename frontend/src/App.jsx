import './App.css'
import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';

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
      <Dashboard data={users} />
    </>
  )
}

export default App