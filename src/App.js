import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-block">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Educational project
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

export default App;
