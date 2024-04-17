import { useNavigate } from 'react-router-dom';

export default function Settings({ setIsLoggedIn }) {

    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('token');
        setIsLoggedIn = false;
        window.location.reload();
        navigate('/login');
    }

    return (
        <>
            <main className="section-title">
                <h1>Settings</h1>
                <button onClick={handleLogout}>Click</button>
            </main>
        </>
    )
}