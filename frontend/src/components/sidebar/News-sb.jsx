import NewsArticles from './NewsArticles';

export default function News({ user }) {

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
                                (user && user.news && user.news.length > 0) ? (
                                    user.news.map(article => (
                                        <NewsArticles article={article} id={article._id} title={article.news_title} desc={article.news_desc} />
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