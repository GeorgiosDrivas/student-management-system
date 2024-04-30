import { useAuth } from '../../AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Settings() {

    const navigate = useNavigate();
    const { logout } = useAuth();
    const id = '65d24a7691bee0a0e12e7840';
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [passwordType, setPasswordType] = useState("password");

    function handleLogout() {
        logout();
    }

    const handleUpdateEmail = async (id, email) => {
        try {
            const response = await fetch(`https://student-management-system-zm51.onrender.com/students/${id}/update-email`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

        } catch (error) {
            console.error('Error updating email:', error.message);
        }
    };

    const handleNewEmail = async () => {
        handleUpdateEmail(id, newEmail);
        navigate("/login", { replace: true });
    };

    const handleUpdatePassword = async (id, password) => {
        try {
            const response = await fetch(`https://student-management-system-zm51.onrender.com/students/${id}/update-password`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password }),
            });

        } catch (error) {
            console.error('Error updating email:', error.message);
        }
    };

    const handleNewPass = async () => {
        handleUpdatePassword(id, newPassword);
        navigate("/login", { replace: true });
    };

    return (
        <>
            <main className="section-title pe-5">
                <h1 className='mb-5'>Settings</h1>
                <section className='settings-section'>
                    <div>
                        <h2 className='mb-3'>Change Email</h2>
                        <p>
                            In this section you can change the email of your profile.<br />
                            After changing your email, the page will refresh and you will have to log in again.
                        </p>
                        <div className='setting-form-wrap'>
                            <form className='d-flex flex-column newCourseForm'>
                                <input type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder='New Email' />
                                <button className='mt-3 button' onClick={handleNewEmail}>Change email</button>
                            </form>
                        </div>
                    </div>
                </section>
                <section className='settings-section'>
                    <div>
                        <h2 className='mb-3'>Change Password</h2>
                        <p>
                            In this section you can change the password of your profile.<br />
                            After changing your password, the page will refresh and you will have to log in again.
                        </p>
                        <div className='setting-form-wrap'>
                            <form className='newCourseForm d-flex flex-column'>
                                <input type={passwordType} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='New Password' />
                            </form>
                            <div className='mb-3'>
                                <label htmlFor="showPassword">Show Password</label>
                                <input className='ms-3' type="checkbox" id='showPassword' name='show' onClick={() => (passwordType === "password") ? setPasswordType("text") : setPasswordType("password")} />
                            </div>
                            <button className='mt-3 button' onClick={handleNewPass}>Change password</button>
                        </div>
                    </div>
                </section>
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