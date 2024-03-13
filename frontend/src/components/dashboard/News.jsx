export default function News({ user }) {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="summary-title mb-5">
                        <h2 className="text-center">News</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    (user.news && user.news.length > 0) ?(
                        user.news.map(article => (
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
        </>
    )
}