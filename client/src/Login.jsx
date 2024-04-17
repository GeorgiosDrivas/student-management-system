import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [data, setData] = useState([]);
    const [password, setPassword] = useState("");
    const [failedLogin, setFailedLogin] = useState("");

    async function fetchData() {
        try {
            const response = await fetch('http://localhost:3000/students');
            if (!response.ok) {
                throw new Error('Failed to fetch students data');
            }
            const dt = await response.json();
            setData(dt);
        } catch (error) {
            console.error('Failed to fetch students data:', error);
        }
    }

    async function handleClick(event) {
        event.preventDefault();
        await fetchData();
        if (data.students) {
            // Perform authentication logic here (e.g., check credentials)
            const user = data.students.find(student => student.email === email && student.password === password);
            if (user) {
                // Set authentication token in localStorage (optional)
                localStorage.setItem('isLoggedIn', true);
                setIsLoggedIn(true); // Set isLoggedIn state to true upon successful login
                navigate('/dashboard');
            } else {
                setEmail("");
                setPassword("");
                setFailedLogin("Wrong credentials. Please try again.");
            }
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
                        <h1>Student Management System</h1>
                        <div className='login-wrap position-relative'>
                            <form className='d-flex flex-column'>
                                <input className='mb-3' type="text" placeholder='Email *' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input className='mb-3' type="password" placeholder='Password *' value={password} onChange={(e) => setPassword(e.target.value)} />
                                <div className='text-center'>
                                    <button className='button' onClick={(e) => handleClick(e)}>Log in</button>
                                </div>
                            </form>
                            {
                                failedLogin && (
                                    <div className='mt-2 text-center position-absolute w-100'>
                                        <p className='' style={{ color: 'red' }}>{failedLogin}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
