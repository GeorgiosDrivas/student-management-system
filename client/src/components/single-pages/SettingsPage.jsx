import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../../App';

export default function Settings() {

    const { setIsLoggedIn } = useContext(LoginContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn = false;
        navigate('/login');
    };

    return (
        <>
            <main className="section-title">
                <h1>Settings</h1>
                <button onClick={() => handleLogout()}>Click</button>
            </main>
        </>
    )
}