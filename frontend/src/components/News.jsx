import { useState, useEffect } from 'react';

export default function News() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('http://localhost:3000/news');
                if (!response.ok) {
                    throw new Error('Failed to fetch students data');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError('Failed to fetch students data');
            }
        };

        fetchNews();
    }, []);
    return (
        <>
            <section className="dashboard-section position-relative">
                <div className='container'>
                    <div className="row">
                        <div className="col-12">
                            <div className="summary-title mb-5">
                                <h2 className="text-center">News</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            (data && data.news) ? (
                                data.news.map(article => (
                                    <div className="col-12" key={article._id}>
                                        <div className="article-wrap" key={article._id}>
                                            <h2>{article.news_title}</h2>
                                            <div className="article-content">
                                                <p>{article.news_desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : null
                        }
                    </div>
                </div>
            </section>
        </>
    )
}