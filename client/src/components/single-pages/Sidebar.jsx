import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import EventIcon from '@mui/icons-material/Event';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

export default function Sidebar() {
    return (
        <>
            <ul id="sidebar-ul" className="right-sidebar position-fixed">
                <li><NavLink to="/dashboard"><DashboardIcon style={{ fill: '#f9fafc', width: "35px", height: "35px", marginRight: "25px" }} />Dashboard</NavLink></li>
                <li><NavLink to="/semester"><AutoStoriesIcon style={{ fill: '#f9fafc', width: "35px", height: "35px", marginRight: "25px" }} />Semester</NavLink></li>
                <li><NavLink to="/events"><EventIcon style={{ fill: '#f9fafc', width: "35px", height: "35px", marginRight: "25px" }} />Events</NavLink></li>
                <li><NavLink to="/news"><NewspaperIcon style={{ fill: '#f9fafc', width: "35px", height: "35px", marginRight: "25px" }} />News</NavLink></li>
                <li><NavLink to="/exercises"><HomeWorkIcon style={{ fill: '#f9fafc', width: "35px", height: "35px", marginRight: "25px" }} />Exercises</NavLink></li>
                <li><NavLink to="/settings"><SettingsIcon style={{ fill: '#f9fafc', width: "35px", height: "35px", marginRight: "25px" }} />Settings</NavLink></li>
            </ul>
        </>
    );
}
