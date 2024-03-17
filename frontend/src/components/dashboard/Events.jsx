export default function Events({ user }) {

    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return (
        <>
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <div className="summary-title mb-5">
                        <h2 className="text-center">Events</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    (user.events && user.events.length > 0) ?
                    (
                        user.events.map(event => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={event._id}>
                                <div className="event_wrap text-center">
                                    <h2>{event.event_name}</h2>
                                    <div className="event_content">
                                        <p>{new Date(event.event_date).toLocaleDateString('en-US', dateOptions)}</p>
                                        <p>{event.event_desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : null
                }
            </div>
        </div>
        </>
    )
}