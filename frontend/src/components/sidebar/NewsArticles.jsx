import { useState } from 'react';
import SingleArticle from './SingleArticle';

export default function NewsArticles({ article, id, title, desc }) {

    const [showArticle, setShowArticle] = useState(false);

    function handleClick() {
        setShowArticle(!showArticle);
    }

    return (
        <div className="col-12" key={id}>
            <div className="article-wrap" onClick={handleClick} key={id}>
                <h2>{title}</h2>
                <div className="article-content">
                    <p>{desc.slice(0, 100)}...</p>
                </div>
            </div>
            {
                showArticle && (
                    <SingleArticle article={article} setShowArticle={setShowArticle} />
                )
            }
        </div>
    )
}