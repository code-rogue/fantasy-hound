import { useState } from 'react';
import '@css/app.css';
import LoginPage from '@auth/loginPage';
import LandingPage from '@app/landingPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? (
        <LandingPage />
      ) : (
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
