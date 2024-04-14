import CloseIcon from '@mui/icons-material/Close';

export default function SingleExercise({ exercise }) {
    return (
        <div className="single-article-details">
            <div className="mb-4">
                <button className='single-article-close-icon' onClick={() => setShowArticle(false)}><CloseIcon /></button>
            </div>
            <h2 className='text-center mb-5'>{exercise.exercise_name}</h2>
            <p>{exercise.exercise_content}</p>
        </div>
    )
}