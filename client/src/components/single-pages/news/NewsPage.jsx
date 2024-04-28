import NewsArticles from './NewsArticles';
import { useState, useEffect, createContext } from 'react';

export const NewsContext = createContext();

export default function News() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://student-management-system-zm51.onrender.com/news');
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

            <main className="section-title">
                <section className="dashboard-section">
                    <div className='container'>
                        <div className="row">
                            <div className="col-12">
                                <div className="summary-title mb-5">
                                    <h1>News</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                (data && data.news) ? (
                                    data.news.map(article => (
                                        <NewsContext.Provider value={{
                                            id: article._id,
                                            title: article.news_title,
                                            desc: article.news_desc,
                                        }}>
                                            <NewsArticles />
                                        </NewsContext.Provider>
                                    ))
                                ) : null
                            }
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}