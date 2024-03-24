import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <>
            <section className="right-sidebar position-relative w-100">
                <ul id="sidebar-ul" className="position-fixed">
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/semester">Semester</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </section>
        </>
    );
}
