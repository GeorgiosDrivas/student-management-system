import { useState, useEffect } from 'react';
import ExercisesArticles from './ExercisesArticles';

export default function Exercises() {

    const [exercise_subject, setExercise_subject] = useState("Introduction to Biology");
    const [status, setStatus] = useState("Published");
    const [loading, setLoading] = useState(false);
    const [exercise_name, setExercise_name] = useState("");
    const [exercise_content, setExercise_content] = useState("");
    const [error, setError] = useState("");
    const [data, setData] = useState([]);
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
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

        fetchCourses();
    }, []);


    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const response = await fetch('http://localhost:3000/exercises');
                if (!response.ok) {
                    throw new Error('Failed to fetch students data');
                }
                const dt = await response.json();
                setExercises(dt);
            } catch (error) {
                setError('Failed to fetch students data');
            }
        };

        fetchExercises();
    }, []);

    const handleSubmit = async (e) => {

        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/exercises', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ exercise_name, exercise_subject, exercise_content, status }),
            });
            setExercise_name('');
            setExercise_content('');

        } catch (error) {
            setError('Failed to add student');
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="section-title">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className='mb-5'>Submitted Exercises</h2>
                        <div>
                            {
                                exercises && exercises.exercises && (
                                    exercises.exercises.map(exercise => (
                                        <ExercisesArticles data={data} exercise={exercise} key={exercise._id} />
                                    ))
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2 className='mb-5'>Add Exercise</h2>
                    </div>
                    <div className="col-12">
                        <form className="newCourseForm">
                            <select className="select-element mb-5 me-5" onChange={(e) => setExercise_subject(e.target.value)}>
                                {
                                    data.courses && data.courses.length > 0 ? (
                                        data.courses.filter(course => course.semester === "Summer Semester")
                                            .map(course => <option key={course._id} value={course.course_name}>{course.course_name}</option>)
                                    ) : (
                                        null
                                    )
                                }
                            </select>
                            <select className="select-element" value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="Publish">Publish</option>
                                <option value="Draft">Draft</option>
                            </select>
                            <input type="text" placeholder="Exercise title" value={exercise_name} onChange={(e) => setExercise_name(e.target.value)} />
                            <input type="textarea" placeholder="Exercise content" value={exercise_content} onChange={(e) => setExercise_content(e.target.value)} />
                            <button className='button' onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}