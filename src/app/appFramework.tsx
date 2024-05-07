import { Outlet } from "react-router-dom";
import logo from '@src/logo.svg';
import { logout } from '@redux/actions';
import store from '@redux/store';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { MdHome, MdLogout, MdSearch } from "react-icons/md";

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import useIsMobile from '@app/useIsMobile';

import '@css/app.css';
import '@css/main-content.css';
import '@css/sidebar.css';
import '@css/topbar.css';

function AppFramework() {
    let [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const isMobile = useIsMobile();
    if(isMobile)
        collapsed = true;

    const navigateHome = () => {
        navigate("/");
    };

    const navigateSearch = () => {
        navigate("/search");
    };

    const toggleSidebar = () => {
      setCollapsed(!collapsed);
    };

    const userLogOut = () => {
        localStorage.setItem('urlHistory', location.pathname);
        store.dispatch(logout());
        navigate("/login");
    };

    const sidebarWidth = !collapsed ? '200px' : '60px';
    return (
        <>
        <div className="App">
            {/* Top bar */}
            <Container 
                disableGutters 
                className="topbar" 
                maxWidth={false} 
                sx={{
                    display: 'flex',
                }}
            >
                <div><img src={logo} className="topbar-logo" alt="logo" /></div>
                <div className="topbar-app-label">Fantasy Hound</div>
                <Container 
                    className="topbar-button-container" 
                    sx={{
                        display: 'inline-flex',
                        padding: '0px !important',
                    }}
                >
                    <Button className="topbar-button"
                        aria-label='Log Out' 
                        endIcon={<MdLogout />} 
                        onClick={userLogOut}
                        size='large'
                        sx={{
                            color: 'white',
                            margin: 0,
                            padding: '0px !important',
                        }}
                        variant='text'
                    />
                </Container>
            </Container>

            <Container 
                maxWidth={false} 
                disableGutters 
                sx={{
                    display: 'flex'
                }}
            >
                {/* Sidebar */}
                <Container 
                    className="sidebar" 
                    disableGutters
                    sx={{
                        width: !collapsed ? '150px' : '45px',
                        minWidth: !collapsed ? '150px' : '45px',
                    }}
                >
                    <Stack spacing={1}>
                        <Container 
                            className="sidebar-button"
                            sx={{
                                display: 'flex',
                                justifyContent: !collapsed ? 'flex-end' : 'center',
                                padding: '0px !important',
                            }}
                        >
                            <Button 
                                aria-label='Toggle Sidebar' 
                                startIcon={!collapsed ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
                                onClick={toggleSidebar}
                                sx={{
                                    color: 'white',
                                    display: 'flex',
                                    justifyContent: !collapsed ? 'flex-end' : 'center',
                                    padding: '0px !important',
                                }}
                                variant='text'
                                size='large'
                            />
                        </Container>
                        <Button 
                            aria-label='Home' 
                            startIcon={<MdHome />}
                            onClick={navigateHome}
                            variant='text'
                            sx={{
                                color: 'white',
                                justifyContent: !collapsed ? 'flex-start' : 'center',
                            }}
                        >
                            {!collapsed ? 'Home' : ''}
                        </Button>
                        <Button 
                            aria-label='Search' 
                            startIcon={<MdSearch />}
                            onClick={navigateSearch}
                            variant='text'
                            sx={{
                                color: 'white',
                                justifyContent: !collapsed ? 'flex-start' : 'center',
                            }}
                        >
                            {!collapsed ? 'Search' : ''}
                        </Button>
                    </Stack>
                </Container>
                
                {/* Main content */}
                <Container 
                    className="main-content"
                    maxWidth={false}
                    disableGutters
                >
                    <Outlet />
                </Container>
            </Container>
        </div>
        </>
    );
}

export default AppFramework;
