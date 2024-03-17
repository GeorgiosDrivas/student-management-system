import CircularProgress from '@mui/material/CircularProgress';

export default function Summary({ user }) {
    let gpa = 0;
    
    // Calculate the gpa based on the midterm grades
    if(user.courses && user.courses.length > 0){
        user.courses.map(course => {
            gpa = gpa + ((course['midterm_grade'] * 4) / 100);
        })
        gpa = Math.round((gpa / 3) * 100) / 100;
    }

    let startDate = '';
    let endDate = '';
    let percent = 0;

    if (user.semester && user.semester.length > 0) {
        startDate = new Date(user.semester[0].start.slice(0, 10));
        endDate = new Date(user.semester[0].end.slice(0, 10));
    }
    // Function to calculate the difference between start and end dates and return the persent based on the current date
    function percentageOfTimeElapsed(startDate, endDate) {
        const currentDate = new Date();
        const totalDifferenceMilliseconds = endDate.getTime() - startDate.getTime();
        const elapsedDifferenceMilliseconds = currentDate.getTime() - startDate.getTime();

        const percentageElapsed = (elapsedDifferenceMilliseconds / totalDifferenceMilliseconds) * 100;
        return percentageElapsed;
    }

    if (startDate !== '' && endDate !== '') {
        const percentageElapsed = percentageOfTimeElapsed(startDate, endDate);
        percent = Math.round(percentageElapsed.toFixed(2));
    }

    return (
        <>
        <div className='container'>
            <div className='row'>
                    <div className="col-12">
                        <div className="summary-title mb-5">
                            <h2 className="text-center">Summary</h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className='summaries'>
                            <div className='gpa_summary position-relative'>
                                <p>GPA</p>
                                <div className='position-absolute gpa_summary_content summary_content'>
                                <p className='text-center'>{gpa}</p>
                                </div>
                                <CircularProgress thickness={2.5} size='15em' variant="determinate" className='progressGPA' value={75} />
                            </div>
                            <div className='semester_summary position-relative'>
                                <p>Semester</p>
                                <div className='position-absolute semester_summary_content summary_content'>
                                    <p className='text-center'>{percent + '%'}</p>
                                </div>
                                <CircularProgress thickness={2.5} size='15em' variant="determinate" className='progressSummary' value={percent} />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}