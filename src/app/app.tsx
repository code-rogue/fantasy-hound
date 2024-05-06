import { AppRoutes } from '@app/routes';
import { BrowserRouter as Router} from 'react-router-dom'
import { 
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
 } from '@chakra-ui/react'
 import { createTheme, ThemeProvider } from '@mui/material/styles';
 import { login } from '@redux/actions';
import {  useDispatch } from 'react-redux';
import { useEffect } from 'react';

import '@css/app.css';

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

const muiTheme = createTheme({
  palette: {
    mode: 'light',
  }
});

function App() {
  const dispatch = useDispatch();

  // Check if access token exists on app start-up
  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken');
    if (storedAccessToken) {
      dispatch(login(storedAccessToken));
    }
  }, [dispatch]);

  return (
    <ChakraBaseProvider theme={theme}>
      <ThemeProvider theme={muiTheme}>
        <Router>
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </ChakraBaseProvider>
  );
}

export default App;
