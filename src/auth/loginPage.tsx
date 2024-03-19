import '@css/app.css';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import store from '@redux/store';
import { login, logout } from '@redux/actions';

import config from '@src/config.json';
import Config from '@interfaces/config/config';

const appConfig: Config = config;

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('admin');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async () => {
      try {
        const response = await fetch(`${appConfig.statServer.url}:${appConfig.statServer.port}/auth/login`, {
          method: 'POST',
          headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password
          }),
        });
  
        if (!response.ok) {
          store.dispatch(logout());
          throw new Error('Failed to submit data');
        }
  
        const data = await response.json();
        store.dispatch(login(data.access_token));

        let from = '/';
        console.log('urlHistory: ', localStorage.getItem('urlHistory'));
        console.log('Location: ', location);
        if(location.state?.from)
          from = location.state?.from;
        else
          from = localStorage.getItem('urlHistory') ?? '/';

        console.log('From: ', from);
        navigate(from);
      } catch (error) {
        console.error('Error:', error);
        setError('Failed to authenticate. Please check your credentials.');
      }
    };
  
    return (
      <div>
        <h1>Login Page</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
}

export default LoginPage;
