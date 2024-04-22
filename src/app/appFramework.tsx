import { Outlet } from "react-router-dom";
import logo from '@src/logo.svg';
import { logout } from '@redux/actions';
import store from '@redux/store';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { MdHome, MdLogout } from "react-icons/md";
import { Button, Container, IconButton, Link } from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

import '@css/app.css';
import '@css/main-content.css';
import '@css/sidebar.css';
import '@css/topbar.css';

function AppFramework() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const navigateHome = () => {
        navigate("/");
    };

    const navigateHome2 = () => {
        navigate("/home");
    };

    const toggleSidebar = () => {
      setCollapsed(!collapsed);
    };

    const userLogOut = () => {
        localStorage.setItem('urlHistory', location.pathname);
        store.dispatch(logout());
        navigate("/login");
    };
    
    return (
        <>
        <div className="App">
            {/* Top bar */}
            <Container className="topbar">
                <div><img src={logo} className="topbar-logo" alt="logo" /></div>
                <div className="topbar-app-label">Fantasy Hound</div>
                <Container className="topbar-button-container">
                    <IconButton className="topbar-button"
                        variant='outline'
                        colorScheme='lime'
                        fontSize='20px'
                        aria-label='Log Out' 
                        icon={<MdLogout />} 
                        onClick={userLogOut}
                        size='sm' 
                    />
                </Container>
            </Container>

            <Container display='flex'>
                {/* Sidebar */}
                <Container className="sidebar" 
                    width={!collapsed ? '200px' : '60px'}
                >
                    <Container className="sidebar-button">
                        <IconButton 
                            variant='outline'
                            colorScheme='lime'
                            aria-label='Toggle Sidebar' 
                            icon={!collapsed ? <ArrowLeftIcon /> : <ArrowRightIcon />}
                            onClick={toggleSidebar} 
                            size='sm'
                        />
                    </Container>
                    <Container>
                            <nav>
                                <ul>
                                    <li>
                                        <Button 
                                            aria-label='Home' 
                                            color='lime'
                                            colorScheme='lime'
                                            leftIcon={<MdHome />}
                                            onClick={navigateHome}
                                            iconSpacing='4px'
                                        >{!collapsed ? 'Home' : ''}</Button>
                                    </li>
                                    <li>
                                        <Button 
                                            aria-label='Home' 
                                            color='lime'
                                            colorScheme='lime'
                                            leftIcon={<MdHome />}
                                            onClick={navigateHome2}
                                            iconSpacing='4px'
                                        >{!collapsed ? 'Home 2' : ''}</Button>
                                    </li>
                                </ul>
                            </nav>
                    </Container>
                </Container>
                
                {/* Main content */}
                <Container className="main-content">
                    <Outlet />
                </Container>
            </Container>
        </div>
        </>
    );
}

export default AppFramework;
