import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import config from '@src/config.json';
import Config from '@interfaces/config/config';
import Container from '@mui/material/Container';
import { login, logout } from '@redux/actions';
import React, { useState } from 'react';
import store from '@redux/store';
import TextField from '@mui/material/TextField';
import { useLocation, useNavigate } from 'react-router-dom';

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
        if(location.state?.from)
          from = location.state.from.pathname;
        else
          from = localStorage.getItem('urlHistory') ?? '/';

        navigate(from);
      } catch (error) {
        console.error('Error:', error);
        setError('Failed to authenticate. Please check your credentials.');
      }
    };
  
    return (
      <Container sx={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
        <Card raised={true} sx={{ width: 325, height: 350, margin: 1, marginTop: 20 }}>
          <CardHeader
            title='Fantasy Hound'
            titleTypographyProps={{ color: 'white', textAlign: 'center' }} 
            subheader="Pepper's Playground"
            subheaderTypographyProps={{ color: 'white', fontSize: 13, textAlign: 'center' }}
            sx={{ padding: 1, backgroundColor: '#104CEF' }}
          />
          <CardContent sx={{ margin: 1 }}>
            <Container disableGutters sx={{width: '100%'}}>
              <TextField
                error={error !== ''}
                id="user-name"
                label="User Name"
                placeholder=""
                onChange={(e) => setUsername(e.target.value)}
                sx={{ paddingBottom: 1, width: '100%' }}
                value={username}
              />
            </Container>
            <Container disableGutters sx={{width: '100%'}}>
              <TextField
                error={error !== ''}
                helperText={ (error !== '') ? 'Invalid User Name or Password' : '' }
                id='password'
                label='Password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                sx={{ paddingBottom: 1, marginTop: 1, width: '100%' }}
                type='password'
                value={password}
              />
            </Container>
            <Container disableGutters sx={{display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
              <Button 
                onClick={handleLogin}
                sx={{ paddingTop: 2 }}
                variant='contained'
              >
                Login
              </Button>
            </Container>            
          </CardContent>
        </Card>
      </Container>
        //{error && <p style={{ color: 'red' }}>{error}</p>}
    );
}

export default LoginPage;
