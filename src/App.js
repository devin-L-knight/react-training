// NOTE: With the latest version of react, we do not need to import React from react like we did previously.
import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import Home from './Home';

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

      <Navbar />
      <div className="content">
        {/* <h1>{title}</h1>
        <p>Liked {likes} times</p>

        <a href={link}>Google Site</a> */}
        <Home />
      </div>
    </div>
  );
}

export default App;
