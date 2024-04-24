import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [data, setData] = useState([]);
    const [password, setPassword] = useState("");
    const [failedLogin, setFailedLogin] = useState("");
    const { setIsLoggedIn } = useContext(LoginContext);

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
            const user = data.students.find(student => student.email === email && student.password === password);
            if (user) {
                setIsLoggedIn(true); // Update login state using context
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
            <div className="row">
                <div className="col-12">
                    <p>Test credentials:</p>
                    <p className='m-0'>Email: jessica@gmail.com</p>
                    <p className='m-0'>Password: 123jessica</p>
                </div>
            </div>
        </div>
    );
}
