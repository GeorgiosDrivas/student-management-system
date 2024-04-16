import { useState } from 'react';
import SingleExercise from './SingleExercise';

export default function ExercisesArticles({ data, exercise }) {

    const [showArticle, setShowArticle] = useState(false);

    function handleClick() {
        setShowArticle(!showArticle);
    }

    return (
        <div className="col-12" key={exercise._id}>
            <div className="article-wrap position-relative" onClick={handleClick}>
                <div className='position-absolute exercise-color' style={{ backgroundColor: exercise.status === 'Published' ? "green" : 'grey' }}></div>
                <h3>{exercise.exercise_name}</h3>
                <p>{exercise.exercise_subject}</p>
                <p>Status: {exercise.status}</p>
                <p>{exercise.exercise_content.slice(0, 200)}</p>
            </div>
            {
                showArticle && (
                    <SingleExercise data={data} exercise={exercise} setShowArticle={setShowArticle} />
                )
            }
        </div>
    )
}