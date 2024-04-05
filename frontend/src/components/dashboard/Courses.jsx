export default function Semester({ user }) {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="summary-title mb-5">
                        <h2>Semester</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="accordion" id="accordionExample">
                        {
                            (user.courses && user.courses.length > 0) ?
                                (
                                    user.courses.map(course => (
                                        <div className="accordion-item" key={course._id}>
                                            <h2 className="accordion-header" id={'heading' + course._id}>
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse' + course._id} aria-expanded="true" aria-controls={'collapse' + course._id}>
                                                    <p key={course._id}>{course.course_name}</p>
                                                </button>
                                            </h2>
                                            <div id={'collapse' + course._id} className={`accordion-collapse collapse ${course._id === '65d7b1bfcc7bd8cbea93026f' ? 'show' : ''}`} aria-labelledby={'heading' + course._id} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p key={course._id}>{course.course_desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
