export default function Events({ user }) {

    const dateOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    };
    const currentDate = new Date().toLocaleDateString("en-US", dateOptions);
    let eventDate = '';

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
                        (user && user.events && user.events.length > 0) ?
                            (
                                user.events.map(event => {
                                    eventDate = new Date(event.event_date).toLocaleDateString("en-US", dateOptions);
                                    if (currentDate === eventDate) {
                                        return (
                                            < div className="col-12" key={event._id} >
                                                <div className="text-center">
                                                    <h2>{event.event_name}</h2>
                                                    <div className="event_content">
                                                        <p>Today at {event.event_place}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return null;
                                    }
                                }
                                )
                            ) : null
                    }
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <button className="button">View all events</button>
                </div>
            </div >
        </>
    )
}