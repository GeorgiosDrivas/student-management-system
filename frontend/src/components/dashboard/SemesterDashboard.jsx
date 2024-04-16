import { useState, useEffect } from 'react';

export default function Semester() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3000/courses');
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
            <div className="row">
                <div className="col-12">
                    <div className="summary-title mb-5">
                        <h2>Current Semester</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    (data.courses) ?
                        (
                            data.courses.filter((course) => course.semester === "Summer Semester").map(course => (
                                <div className="col-12 col-lg-6" key={course._id}>
                                    <div id="dashboard_single_course" className="mb-5 accordion-item">
                                        <h2 className="text-center">{course.course_name}</h2>
                                        <div className="text-center">
                                            <p>Taught by: {course.course_teacher}</p>
                                            <p>Grade: <span className="fw-bold grade-span">{course.midterm_grade}</span> out of 100</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : null
                }
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="sem-btn d-flex justify-content-center">
                        <a href="/semester" className="button" title="View all semesters">View all semesters</a>
                    </div>
                </div>
            </div>
        </>
    )
}