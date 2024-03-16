import '@css/app.css';
import logo from '@src/logo.svg';
import store from '@redux/store';
import { selectAccessToken } from '@redux/actions';
function LandingPage() {
  return (
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-header-logo" alt="logo" /><span>Fantasy Hound</span>
        </div>
        <div className="App-landing">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </div>
    </div>
  );
}

export default LandingPage;
