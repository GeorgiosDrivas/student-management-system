import { useState, useEffect } from 'react';

export default function Events() {

    const dateOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    };
    const currentDate = new Date().toLocaleDateString("en-US", dateOptions);
    let eventDate = '';


    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3000/events');
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
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="summary-title mb-5">
                            <h2 className="text-center">Today's Events</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        data && data.events ? (
                            data.events.filter(event => {
                                const eventDate = new Date(event.event_date).toLocaleDateString("en-US", dateOptions);
                                return currentDate === eventDate;
                            }).map(event => (
                                <div className="col-12" key={event._id}>
                                    <div className="mb-5">
                                        <h2 className="text-start m-0">{event.event_name}</h2>
                                        <div className="event_content m-0">
                                            <p className="m-0">Place: <span className="fw-bold">{event.event_place}</span></p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : null
                    }
                    {
                        data && data.events && data.events.every(event => {
                            const eventDate = new Date(event.event_date).toLocaleDateString("en-US", dateOptions);
                            return currentDate !== eventDate;
                        }) && (
                            <div className="col-12">
                                <p className="text-center">There are no events happening today</p>
                            </div>
                        )
                    }
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <a className="button" href="/events" title="View all events">View all events</a>
                </div>
            </div >
        </>
    )
}