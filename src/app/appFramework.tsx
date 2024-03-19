import { Link, Outlet } from "react-router-dom";
import logo from '@src/logo.svg';
import { logout } from '@redux/actions';
import store from '@redux/store';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '@css/app.css';
import '@css/main-content.css';
import '@css/sidebar.css';
import '@css/topbar.css';

function AppFramework() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleSidebar = () => {
      setCollapsed(!collapsed);
    };

    const userLogOut = () => {
        localStorage.setItem('urlHistory', location.pathname);
        store.dispatch(logout());
        navigate("/login");
    }

    return (
        <>
        <div className="App">
            {/* Top bar */}
            <div id="topbar" className="topbar">
                <div><img src={logo} className="topbar-logo" alt="logo" /></div>
                <div>Fantasy Hound</div>
                <div className="topbar-sections"><button onClick={toggleSidebar}>Toggle Sidebar</button></div>
                <div className="topbar-sections"><button onClick={userLogOut}>Log Out</button></div>
            </div>

            {/* Sidebar */}
            <div id="sidebar" className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/home'>Home 2</Link></li>
                    </ul>
                </nav>
            </div>

            {/* Main content */}
            <div id="main-app" className="main-content">
                <Outlet />
            </div>
        </div>
        </>
    );
}

export default AppFramework;
