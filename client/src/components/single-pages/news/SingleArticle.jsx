import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SingleArticle() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [article, setArticle] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const postId = id;
                const response = await fetch(`https://student-management-system-zm51.onrender.com/news/${postId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch post data');
                }
                const data = await response.json();
                setArticle(data);
            } catch (error) {
                setError('Failed to fetch post data');
            }
        };

        fetchArticle();
    }, []);


    return (
        <>
            <div className="mt-5 px-5">
                <h2 className='text-center mb-5'>{article.news_title}</h2>
                <p>{article.news_desc}</p>
                <div>
                    <button className='button mt-5' onClick={() => navigate(-1)}>&larr; Back to News</button>
                </div>
            </div>
        </>
    )
}