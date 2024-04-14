import CloseIcon from '@mui/icons-material/Close';

export default function singleArticle({ article, setShowArticle }) {
    return (
        <div className="single-article-details">
            <div className="mb-4">
                <button className='single-article-close-icon' onClick={() => setShowArticle(false)}><CloseIcon /></button>
            </div>
            <h2 className='text-center mb-5'>{article.news_title}</h2>
            <p>{article.news_desc}</p>
        </div>
    )
}