import { useState, useRef } from 'react';

export default function Exercises({ data }) {

    const [exercise_subject, setExercise_subject] = useState("Introduction to Biology");
    const [selectStatusValue, setselectStatusValue] = useState("Publish");
    const [loading, setLoading] = useState(false);
    const [exercise_name, setExercise_name] = useState("");
    const [exercise_content, setExercise_content] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (requestCounter >= maxRequestsPerMinute) {
        //     console.log('Maximum number of requests exceeded. Please try again later.');
        //     return;
        // }

        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ exercise_name, exercise_subject, exercise_content }),
            });

            if (!response.ok) {
                throw new Error('You can take up to 4 courses per semester');
            }
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
                        <h1>Exercises</h1>
                    </div>
                    <div className="col-12">
                        <form className="newCourseForm">
                            <select className="select-element my-5" onChange={(e) => setExercise_subject(e.target.value)}>
                                {
                                    data.courses && data.courses.length > 0 ? (
                                        data.courses.filter(course => course.semester === "Summer Semester")
                                            .map(course => <option key={course._id} value={course.course_name}>{course.course_name}</option>)
                                    ) : (
                                        null
                                    )
                                }
                            </select>
                            <select className="select-element" onChange={(e) => setselectStatusValue(e.target.value)}>
                                <option value="Draft">Draft</option>
                                <option value="Publish">Publish</option>
                            </select>
                            <input type="text" placeholder="Exercise title" value={exercise_name} onChange={(e) => setExercise_name(e.target.value)} />
                            <input type="textarea" placeholder="Exercise content" value={exercise_content} onChange={(e) => setExercise_content(e.target.value)} />
                            <button onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}