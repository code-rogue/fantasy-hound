import '@css/app.css';
import logo from '@src/logo.svg';

function LandingPageToo() {
  return (
    <div >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/Landing Page Too.tsx</code> and save to reload.
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
  );
}

export default LandingPageToo;
