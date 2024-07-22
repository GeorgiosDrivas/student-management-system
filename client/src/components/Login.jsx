import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import useFocus from '../hooks/useFocus';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordType, setPasswordType] = useState("password");
    const { login, isAuthenticated, loading } = useAuth();
    const inputRef = useFocus();

    function handleClick(event) {
        event.preventDefault();
        if (email && password && !loading) login(email, password);
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
                                <input ref={inputRef} className='mb-3' type="text" placeholder='Email *' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input className='mb-3' type={passwordType} placeholder='Password *' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </form>
                            <div className='mb-4'>
                                <label htmlFor="showPassword">Show Password</label>
                                <input className='ms-3' type="checkbox" id='showPassword' name='show' onClick={() => (passwordType === "password") ? setPasswordType("text") : setPasswordType("password")} />
                            </div>
                            <div className='text-center'>
                                <button className='button' onClick={(e) => handleClick(e)}>Log in</button>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p>Test credentials:</p>
                            <p className='m-0'>Email: aimal@gmail.com</p>
                            <p className='m-0'>Password: 123456aaaa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
