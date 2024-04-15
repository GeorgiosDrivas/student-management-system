import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function SingleExercise({ data, exercise, setShowArticle }) {

    const [showEdit, setShowEdit] = useState(false);
    const [exercise_name, setExerciseName] = useState(exercise.exercise_name);
    const [exercise_content, setExerciseContent] = useState(exercise.exercise_content);
    const [exercise_subject, setExerciseSubject] = useState(exercise.exercise_subject);
    const [status, setStatus] = useState("Published");

    const handleUpdate = async () => {
        try {
            const response = await fetch(`http://localhost:3000/exercises/${exercise._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    exercise_name,
                    exercise_subject,
                    exercise_content,
                    status
                })
            });
            if (response.ok) {
                setShowEdit(false);
            } else {
                console.error('Failed to update exercise');
            }
        } catch (error) {
            console.error('Error updating exercise:', error);
        }
    };

    return (
        <div className="single-article-details">
            <div className="mb-4">
                <button className='single-article-close-icon' onClick={() => setShowArticle(false)}><CloseIcon /></button>
            </div>
            <h2 className='text-center mb-5'>{exercise.exercise_name}</h2>
            <p>{exercise.exercise_content}</p>
            {
                exercise.status === "Draft" ? (
                    <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
                ) : null}
            {
                showEdit ? (
                    <form>
                        <input type="text" placeholder='Title' value={exercise_name} onChange={(e) => setExerciseName(e.target.value)} />
                        <textarea placeholder='Content' value={exercise_content} onChange={(e) => setExerciseContent(e.target.value)} />
                        <select className="select-element my-5" value={exercise.exercise_subject} onChange={(e) => setExerciseSubject(e.target.value)}>
                            {
                                data.courses && data.courses.length > 0 ? (
                                    data.courses.filter(course => course.semester === "Summer Semester")
                                        .map(course => <option key={course._id} value={course.course_name}>{course.course_name}</option>)
                                ) : (
                                    null
                                )
                            }
                        </select>
                        <select value={exercise.status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="Published">Published</option>
                            <option value="Draft">Draft</option>
                        </select>
                        <button type="button" onClick={handleUpdate}>Submit</button>
                    </form>
                ) : null
            }
        </div >
    )
}
