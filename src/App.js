// NOTE: With the 
import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'Welcome to the new React blog'
  const likes = 50;
  const link = 'http://www.google.com'

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
