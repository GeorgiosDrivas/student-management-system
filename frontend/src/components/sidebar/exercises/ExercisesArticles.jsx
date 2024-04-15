import { useState } from 'react';
import SingleExercise from './SingleExercise';

export default function ExercisesArticles({ data, exercise, title, id, content, subject, status }) {

    const [showArticle, setShowArticle] = useState(false);

    function handleClick() {
        setShowArticle(!showArticle);
    }

    return (
        <div className="col-12" key={id}>
            <div className="article-wrap" onClick={handleClick} key={id}>
                <h3>{title}</h3>
                <p>{subject}</p>
                <p>Status: {status}</p>
                <p>{content.slice(0, 200)}</p>
            </div>
            {
                showArticle && (
                    <SingleExercise data={data} id={id} exercise={exercise} setShowArticle={setShowArticle} />
                )
            }
        </div>
    )
}