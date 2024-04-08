import Summary from "../dashboard/Summary";
import Semester from "../dashboard/Semester";
import { useState } from "react";

export default function SemesterSb({ data }) {

    const [course_name, setCourseName] = useState('');
    const [course_teacher, setCourseTeacher] = useState('');
    const [midterm_grade, setMidtermGrade] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [showBtnText, setShowBtnText] = useState("Add new course");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ course_name, course_teacher, midterm_grade }), // Convert surname to string
            });
            if (!response.ok) {
                throw new Error('Failed to add student');
            }
            // Clear form fields on success
            setCourseName('');
            setCourseTeacher('');
            setMidtermGrade('');
            // Optionally, you can trigger a refetch of the data here
        } catch (error) {
            setError('Failed to add student');
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleShowClick = () => {
        setShowForm(!showForm);
        !showForm ? setShowBtnText("Hide Form") : setShowBtnText("Add new course");
    }


    return (
        <>
            <h1 className="section-title">Semester</h1>
            <div className="semester-page-courses d-flex flex-column">
                {
                    (data.courses && data.courses.length > 0) ?
                        (
                            data.courses.map(course => (
                                <div key={course._id} className="mb-5 d-flex flex-row justify-content-between align-items-start">
                                    <div className="text-start">
                                        <h2>{course.course_name}</h2>
                                        <p className="taught-p">Taught by: <span className="fw-bold">{course.course_teacher}</span></p>
                                    </div>
                                    <div>
                                        <p><span className="fw-bold grade-span">{course.midterm_grade}</span> / 100</p>
                                    </div>
                                </div>
                            ))
                        ) : null
                }
            </div>
            <button className="button" onClick={() => handleShowClick()}>{showBtnText}</button>

            {
                showForm && (
                    <div className="form-wrap">
                        <h2 className="mb-4">Add Course</h2>
                        <form className="mb-5 newCourseForm d-flex flex-column justify-content-center align-items-center">
                            <input placeholder="Course Name" type="text" value={course_name} onChange={(e) => setCourseName(e.target.value)} />
                            <input placeholder="Teacher" rows='3' value={course_teacher} onChange={(e) => setCourseTeacher(e.target.value)} />
                            <input placeholder="Course midterm grade" type="number" value={midterm_grade} onChange={(e) => setMidtermGrade(e.target.value)} />
                            <button className="align-self-start button" type="submit" disabled={loading} onClick={handleSubmit}>
                                {loading ? 'Adding...' : 'Add course'}
                            </button>
                            {error && <p>{error}</p>}
                        </form>
                    </div>
                )}
        </>
    )
}