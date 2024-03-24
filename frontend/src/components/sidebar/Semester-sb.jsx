import Summary from "../dashboard/Summary";
import Semester from "../dashboard/Courses";

export default function SemesterSb({ data }) {
    return (
        <>
            <h1>Semester</h1>

            <section className="dashboard-section position-relative">
                <Summary user={data} />
            </section>
            <section className="dashboard-section position-relative">
                <div className="container">
                    <Semester user={data} />
                </div>
            </section>
        </>
    )
}
