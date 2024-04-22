import { AppRoutes } from '@app/routes';
import { AppState } from '@interfaces/state/appState';
import { BrowserRouter as Router} from 'react-router-dom'
import { 
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
 } from '@chakra-ui/react'
import { login } from '@redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import '@css/app.css';

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

function App() {
  const dispatch = useDispatch();
  const accessToken = useSelector((state: AppState) => state.auth.accessToken);

  // Check if access token exists on app start-up
  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken');
    if (storedAccessToken) {
      dispatch(login(storedAccessToken));
    }
  }, [dispatch]);

  return (
    <ChakraBaseProvider theme={theme}>
      <Router>
        <AppRoutes />
      </Router>
    </ChakraBaseProvider>
  );
}

export default App;
