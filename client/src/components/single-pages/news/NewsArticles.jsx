import { useState } from 'react';
import SingleArticle from './SingleArticle';
import { Link } from 'react-router-dom';

export default function NewsArticles({ article, id, title, desc }) {

    const [showArticle, setShowArticle] = useState(false);

    function handleClick() {
        setShowArticle(!showArticle);
    }

    return (
        <Link to={`${id}`}>
            <div className="col-12 col-lg-6" key={id}>
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
        </Link>
    )
}