import Summary from "./dashboard/Summary";
import Semester from "./dashboard/Courses";


export default function Dashboard({ data }) {
    // Declare date variables for greeting message
    let date = new Date().getHours();
    const morning = 12;

    return (
        <>
            <main id="main">
                <section className="position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="greeting-text mb-5 greetings-message">
                                    {
                                        (data.students) ? (
                                            <h1>Greatings, {data.students[0].name}!</h1>
                                        ) : null

                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="dashboard-section position-relative">
                    <Summary user={data} />
                </section>
                <section className="dashboard-section position-relative semester-section">
                    <div className="container">
                        <Semester user={data} />
                    </div>
                </section>
            </main>
        </>
    )
<<<<<<< HEAD
}
=======
}
>>>>>>> c4ffcbf (Dashboard styling and layout)
