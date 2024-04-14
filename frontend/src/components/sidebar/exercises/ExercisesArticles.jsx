import { useState } from 'react';
import SingleExercise from './SingleExercise';

export default function ExercisesArticles({ exercise, title, id, content, subject }) {

    const [showArticle, setShowArticle] = useState(false);

    function handleClick() {
        setShowArticle(!showArticle);
    }

    return (
        <div className="col-12" key={id}>
            <div className="article-wrap" onClick={handleClick} key={id}>
                <h3>{title}</h3>
                <p>{subject}</p>
                <p>{content.slice(0, 200)}</p>
            </div>
            {
                showArticle && (
                    <SingleExercise exercise={exercise} setShowArticle={setShowArticle} />
                )
            }
        </div>
    )
}