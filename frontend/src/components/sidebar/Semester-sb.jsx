import { useState, useEffect, useRef } from "react";
import CircularProgress from '@mui/material/CircularProgress';

export default function SemesterSb() {

    const [course_name, setCourseName] = useState('');
    const [user, setUser] = useState([]);
    const [course_teacher, setCourseTeacher] = useState('');
    const [midterm_grade, setMidtermGrade] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [showBtnText, setShowBtnText] = useState("Add new course");
    const [selectValue, setSelectValue] = useState("Summer Semester");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [showForm]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3000/students');
                if (!response.ok) {
                    throw new Error('Failed to fetch students data');
                }
                const data = await response.json();
                setUser(data);
            } catch (error) {
                setError('Failed to fetch students data');
            }
        };

        fetchUsers();
    }, []);




    const onValueChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setSelectValue(value);
    }

    let requestCounter = 0;
    const maxRequestsPerMinute = 1;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (requestCounter >= maxRequestsPerMinute) {
            console.log('Maximum number of requests exceeded. Please try again later.');
            return;
        }

        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ course_name, course_teacher, midterm_grade }),
            });

            // Increment the request counter after making the request
            requestCounter++;

            if (!response.ok) {
                throw new Error('Failed to add student');
            }
            setCourseName('');
            setCourseTeacher('');
            setMidtermGrade('');
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
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title d-flex justify-content-between align-items-center">
                                {selectValue && <h1 className="mt-3">{selectValue}</h1>}
                                <select onChange={onValueChange} id="semester-select" placeholder="Choose a semester">
                                    <option value="Summer Semester">Summer semester</option>
                                    <option value="Spring Semester">Spring semester</option>
                                    <option value="Fall Semester">Fall semester</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="semester-page-courses d-flex flex-column">
                                {user && user.courses && user.courses.length > 0 && selectValue ? (
                                    selectValue === 'Summer Semester' ? (
                                        user.courses.filter(course => course.semester === 'Summer Semester').map(course => (
                                            <div key={course._id} className="mb-5 d-flex flex-row justify-content-between align-items-start">
                                                <div className="text-start">
                                                    <h2>{course.course_name}</h2>
                                                    <p className="taught-p">Taught by: <span className="fw-bold">{course.course_teacher}</span></p>
                                                </div>
                                                <div>
                                                    <div className='position-relative'>
                                                        <div className='position-absolute semester_page_summary_content summary_content'>
                                                            <p className='text-center'><span className="fw-bold">{course.midterm_grade}</span> / 100</p>
                                                        </div>
                                                        <CircularProgress thickness={1.5} size='7em' variant="determinate" className='progressSummary' value={course.midterm_grade} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))) : selectValue === 'Spring Semester' ? (
                                            user.courses.filter(course => course.semester === 'Spring Semester').map(course => (
                                                <div key={course._id} className="mb-5 d-flex flex-row justify-content-between align-items-start">
                                                    <div className="text-start">
                                                        <h2>{course.course_name}</h2>
                                                        <p className="taught-p">Taught by: <span className="fw-bold">{course.course_teacher}</span></p>
                                                    </div>
                                                    <div>
                                                        <div className='position-relative'>
                                                            <div className='position-absolute semester_page_summary_content summary_content'>
                                                                <p className='text-center'><span className="fw-bold">{course.midterm_grade}</span> / 100</p>
                                                            </div>
                                                            <CircularProgress thickness={1.5} size='7em' variant="determinate" className='progressSummary' value={course.midterm_grade} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))) : selectValue === 'Fall Semester' ? (
                                                user.courses.filter(course => course.semester === 'Fall Semester').map(course => (
                                                    <div key={course._id} className="mb-5 d-flex flex-row justify-content-between align-items-start">
                                                        <div className="text-start">
                                                            <h2>{course.course_name}</h2>
                                                            <p className="taught-p">Taught by: <span className="fw-bold">{course.course_teacher}</span></p>
                                                        </div>
                                                        <div>
                                                            <div className='position-relative'>
                                                                <div className='position-absolute semester_page_summary_content summary_content'>
                                                                    <p className='text-center'><span className="fw-bold">{course.midterm_grade}</span> / 100</p>
                                                                </div>
                                                                <CircularProgress thickness={1.5} size='7em' variant="determinate" className='progressSummary' value={course.midterm_grade} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))) : null
                                ) : null}
                            </div>
                        </div>
                    </div>
                    {
                        (selectValue === 'Summer Semester') ? (
                            <div className="row">
                                <div className="col-12">
                                    <button className="button" onClick={() => handleShowClick()}>{showBtnText}</button>

                                    {
                                        showForm && (
                                            <div className="form-wrap">
                                                <h2 className="mb-4">Add Course</h2>
                                                <form className="mb-5 newCourseForm d-flex flex-column justify-content-center align-items-center">
                                                    <input ref={inputRef} placeholder="Course Name" type="text" value={course_name} onChange={(e) => setCourseName(e.target.value)} />
                                                    <input placeholder="Teacher" rows='3' value={course_teacher} onChange={(e) => setCourseTeacher(e.target.value)} />
                                                    <input placeholder="Course midterm grade" type="number" value={midterm_grade} onChange={(e) => setMidtermGrade(e.target.value)} />
                                                    <button className="align-self-start button" type="submit" disabled={loading} onClick={handleSubmit}>
                                                        {loading ? 'Adding...' : 'Add course'}
                                                    </button>
                                                    {error && <p>{error}</p>}
                                                </form>
                                            </div>
                                        )}
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </main>
        </>
    )
}