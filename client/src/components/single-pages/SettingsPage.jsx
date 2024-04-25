import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import { useEffect } from 'react';

export default function Settings() {

    const { logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
    }

    useEffect(
        function () {
            if (!isAuthenticated) navigate("/login", { replace: true });
        },
        [isAuthenticated, navigate]
    );

    return (
        <>
            <main className="section-title pe-5">
                <h1 className='mb-5'>Settings</h1>
                <section className='settings-section'>
                    <div>
                        <h2 className='mb-3'>Logout</h2>
                        <p>Click this button to log-out. Every change will be saved in the database.<br />After logging out, you will be redirected in the login page.</p>
                        <button className='button' onClick={handleLogout}>Logout</button>
                    </div>
                </section>
                <section className='settings-section'>
                    <div>
                        <h2 className='mb-3'>Credits</h2>
                        <p>
                            This web application was developed by Georgios Drivas. <br /><br />
                            Junior Front-End Developer with nearly 2 years of professional
                            experience in developing, supporting and maintaining websites, 6
                            months of it being an internship. Strong technical skills such as
                            Javascript, React, Typescript, PHP, Bootstrap and Tailwind, as well
                            as soft skills such as problem solving, quick learning, and working
                            as a team member.
                        </p>
                        <p className='m-0'>My linkedIn profile:
                            <a className='social-link' target='_blank' href='https://www.linkedin.com/in/drivasgeorgios/' title='LinkedIn profile'> www.linkedin.com/in/drivasgeorgios</a>
                        </p>
                        <p>My Github profile:
                            <a className='social-link' target='_blank' href='https://github.com/GeorgiosDrivas' title='GitHub profile'> www.github.com/GeorgiosDrivas</a>
                        </p>
                    </div>
                </section>
            </main >
        </>
    )
}