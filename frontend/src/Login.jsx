import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            if (email === data.students[0].email) {
                navigate('/dashboard');
            }
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className='d-flex justify-content-center align-items-center vh-100'>
                        <form className='d-flex flex-column'>
                            <input className='mb-3' type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input className='mb-3' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button onClick={(e) => handleClick(e)}>Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}