import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [data, setData] = useState([]);
    const [password, setPassword] = useState("");

    const { login, isAuthenticated } = useAuth();

    async function handleClick(event) {
        event.preventDefault();
        if (email && password) login(email, password);
    }

    useEffect(
        function () {
            if (isAuthenticated) navigate("/dashboard", { replace: true });
            if (!isAuthenticated) navigate("/login", { replace: true });
        },
        [isAuthenticated, navigate]
    );

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
