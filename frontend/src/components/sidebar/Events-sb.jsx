export default function Events({ user }) {

    const dateOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    };

    return (
        <>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <h1>Events</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">
                            {
                                (user && user.events && user.events.length > 0) ?
                                    (
                                        user.events.map(event => (

                                            <div className="col-12 col-lg-4" key={event._id}>
                                                <div className="text-start p-3 event_wrap mb-5 pb-0">
                                                    <h2 className="mb-4 text-center">{event.event_name}</h2>
                                                    <div className="event_content">
                                                        <p className="text-center">{event.event_desc}</p>
                                                        <div className="d-flex flex-column mt-5">
                                                            <p>Date: {new Date(event.event_date).toLocaleDateString('en-US', dateOptions)}</p>
                                                            <p>Place: {event.event_place}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : null
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}