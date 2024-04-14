import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from 'react';


export default function Summary() {

    const [data, setData] = useState([]);
    const [semester, setSemester] = useState([]);

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


    useEffect(() => {
        const fetchSemester = async () => {
            try {
                const response = await fetch('http://localhost:3000/semester');
                if (!response.ok) {
                    throw new Error('Failed to fetch students data');
                }
                const dt = await response.json();
                setSemester(dt);
            } catch (error) {
                setError('Failed to fetch students data');
            }
        };

        fetchSemester();
    }, []);

    let gpa = 0;

    if (data.courses) {
        let totalGradePoints = 0;
        const summerCourses = data.courses.filter(course => course.semester === 'Summer Semester');
        let totalCourses = summerCourses.length;

        summerCourses.forEach(course => {
            const grade = course['midterm_grade'];

            let gradePoint;
            if (grade >= 90) {
                gradePoint = 4.0;
            } else if (grade >= 80) {
                gradePoint = 3.0;
            } else if (grade >= 70) {
                gradePoint = 2.0;
            } else if (grade >= 60) {
                gradePoint = 1.0;
            } else {
                gradePoint = 0.0;
            }

            totalGradePoints += gradePoint;
        });

        let calculatedGPA = totalGradePoints / totalCourses;
        gpa = Math.min(calculatedGPA, 4); // Ensure GPA doesn't exceed 4
        gpa = Math.round(gpa * 100) / 100; // Round to two decimal places
    }

    const gpaPercentage = (gpa / 4) * 100;

    let startDate = '';
    let endDate = '';
    let percent = 0;

    if (semester.semester && semester.semester.length > 0) {
        startDate = new Date(semester.semester[0].start.slice(0, 10));
        endDate = new Date(semester.semester[0].end.slice(0, 10));
    }
    function percentageOfTimeElapsed(startDate, endDate) {
        const currentDate = new Date();
        const totalDifferenceMilliseconds = endDate.getTime() - startDate.getTime();
        const elapsedDifferenceMilliseconds = currentDate.getTime() - startDate.getTime();

        const percentageElapsed = (elapsedDifferenceMilliseconds / totalDifferenceMilliseconds) * 100;
        return percentageElapsed;
    }

    if (startDate !== '' && endDate !== '') {
        const percentageElapsed = percentageOfTimeElapsed(startDate, endDate);
        percent = Math.round(percentageElapsed.toFixed(2));
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col-12">
                        <div className='summaries'>
                            <div className='gpa_summary position-relative'>
                                <div className='position-absolute gpa_summary_content summary_content'>
                                    <p className='text-center'>{gpa}</p>
                                </div>
                                <CircularProgress
                                    thickness={1.5}
                                    size='10em'
                                    variant="determinate"
                                    className='progressGPA'
                                    value={gpaPercentage}
                                />
                                <p className="summary-text">Semester's GPA</p>
                            </div>
                            <div className='semester_summary position-relative'>
                                <div className='position-absolute semester_summary_content summary_content'>
                                    <p className='text-center'>{percent + '%'}</p>
                                </div>
                                <CircularProgress thickness={1.5} size='10em' variant="determinate" className='progressSummary' value={percent} />
                                <p className="summary-text">Semester Completion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}