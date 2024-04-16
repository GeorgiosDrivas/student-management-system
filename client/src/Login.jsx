import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [failedLogin, setFailedLogin] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/students');
                if (!response.ok) {
                    throw new Error('Failed to fetch students data');
                }
                const dt = await response.json();
                setData(dt);
            } catch (error) {
                setError('Failed to fetch students data');
            }
        };

        fetchData();
    }, []);

    function handleClick(event) {
        event.preventDefault();
        if (data.students) {
            if (email === data.students[0].email && password === data.students[0].password) {
                navigate('/dashboard');
            } else {
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