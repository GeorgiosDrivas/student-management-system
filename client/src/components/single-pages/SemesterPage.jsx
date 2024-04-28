import { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';

export default function SemesterPage() {

    const [courses, setCourses] = useState([]);
    const [error, setError] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [selectValue, setSelectValue] = useState("Summer Semester");

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('https://student-management-system-zm51.onrender.com/courses');
                if (!response.ok) {
                    throw new Error('Failed to fetch students data');
                }
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                setError('Failed to fetch students data');
            }
        };

        fetchCourses();
    }, []);

    const onValueChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setSelectValue(value);
    }

    const handleShowClick = () => {
        setShowForm(!showForm);
        !showForm ? setShowBtnText("Hide Form") : setShowBtnText("Add new course");
    }

    return (
        <>
            <main className="section-title">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-between align-items-center">
                                {selectValue && <h1 className="mt-3">{selectValue}</h1>}
                                <select onChange={onValueChange} className="select-element" placeholder="Choose a semester">
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
                                {courses && courses.courses && selectValue ? (
                                    selectValue === 'Summer Semester' ? (
                                        courses.courses.filter(course => course.semester === 'Summer Semester').map(course => (
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
                                            courses.courses.filter(course => course.semester === 'Spring Semester').map(course => (
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
                                                courses.courses.filter(course => course.semester === 'Fall Semester').map(course => (
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
                </div>
            </main>
        </>
    )
}