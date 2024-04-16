import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import EventIcon from '@mui/icons-material/Event';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidebar() {
    return (
        <>
            <ul id="sidebar-ul" className="right-sidebar position-fixed">
                <li><Link to="/dashboard"><DashboardIcon style={{ fill: '#f9fafc', width: "35px", height: "35px", marginRight: "25px" }} />Dashboard</Link></li>
                <li><Link to="/semester"><AutoStoriesIcon style={{ fill: '#f9fafc', width: "35px", height: "35px", marginRight: "25px" }} />Semester</Link></li>
                <li><Link to="/events"><EventIcon style={{ fill: '#f9fafc', width: "35px", height: "35px", marginRight: "25px" }} />Events</Link></li>
                <li><Link to="/news"><NewspaperIcon style={{ fill: '#f9fafc', width: "35px", height: "35px", marginRight: "25px" }} />News</Link></li>
                <li><Link to="/exercises"><HomeWorkIcon style={{ fill: '#f9fafc', width: "35px", height: "35px", marginRight: "25px" }} />Exercises</Link></li>
                <li><Link to="/settings"><SettingsIcon style={{ fill: '#f9fafc', width: "35px", height: "35px", marginRight: "25px" }} />Settings</Link></li>
            </ul>
        </>
    );
}
