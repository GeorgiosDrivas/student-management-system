import { Link } from 'react-router-dom';
import { NewsContext } from './NewsPage';
import { useContext } from 'react';

export default function NewsArticles() {
    const { id, title, desc } = useContext(NewsContext);

    return (
        <Link to={`${id}`}>
            <div className="col-12 col-lg-6" key={id}>
                <div className="article-wrap" key={id}>
                    <h2>{title}</h2>
                    <div className="article-content">
                        <p>{desc.slice(0, 100)}...</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}