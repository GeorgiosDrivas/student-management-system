import Summary from "./dashboard/Summary";
import Semester from "./dashboard/Semester";
import News from './single-pages/News';
import Events from './dashboard/Events';
import { useState, useEffect } from 'react';

export default function Dashboard() {
    // Declare date variables for greeting message
    let date = new Date().getHours();
    const morning = 12;
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
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

        fetchUsers();
    }, []);

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