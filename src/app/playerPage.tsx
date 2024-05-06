import '@css/app.css';
import logo from '@src/logo.svg';

function PlayerPage() {
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/Player Page.tsx</code> and save to reload.
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

export default PlayerPage;
