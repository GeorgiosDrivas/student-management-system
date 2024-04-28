import Summary from "./SummaryDashboard";
import Semester from "./SemesterDashboard";
import News from './NewsDashboard';
import Events from './EventsDashboard';
import { useState, useEffect, useContext } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../AuthContext";

export default function Dashboard() {

    const [data, setData] = useState([]);
    const { logout, isAuthenticated } = useAuth();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://student-management-system-01l8.onrender.com/students');
                if (!response.ok) {
                    throw new Error('Failed to fetch students data');
                }
                const dt = await response.json();
                setData(dt);
            } catch (error) {
                setError('Failed to fetch students data');
            }
        };

        fetchUsers();
    }, []);

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
            <main id="main">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <section className="position-relative">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="greeting-text mb-5 greetings-message">
                                                {
                                                    (data.students) ? (
                                                        <h1>Greetings, {data.students[0].name}!</h1>
                                                    ) : null

                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="dashboard-section position-relative">
                                <Summary />
                            </section>
                            <section className="dashboard-section position-relative semester-section">
                                <div className="container">
                                    <Semester />
                                </div>
                            </section>
                        </div>
                        <div className="col-12 col-lg-4">
                            {(data.students) ? (
                                <div className="d-flex justify-contennt-center align-items-center mb-3">
                                    <div className="profile-pic position-relative">
                                        <img src={data.students[0].image} alt={data.students[0].name + '`s Image'} />
                                    </div>
                                    <div>
                                        <p className="m-0 profile-text text-center">{data.students[0].name} {data.students[0].surname}</p>
                                        <p className="m-0 profile-year">{data.students[0].year}</p>
                                    </div>
                                    <div className="ms-4">
                                        <button className="logout-btn" onClick={handleLogout}>
                                            <LogoutIcon />
                                        </button>
                                    </div>
                                </div>
                            ) : null}
                            <div className='right-sidebar py-4'>
                                <News />
                                <Events />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}