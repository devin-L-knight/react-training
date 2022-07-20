// NOTE: With the latest version of react, we do not need to import React from react like we did previously.
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Site Components:
import Navbar from './Navbar';
import Home from './Home';
import CreateBlog from './Create';

function App() {
  // const title = 'Welcome to the new React blog'
  // const likes = 50;
  // const link = 'http://www.google.com'

  return (
    <Router>
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
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/create"><CreateBlog /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
