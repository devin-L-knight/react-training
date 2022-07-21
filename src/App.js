// NOTE: With the latest version of react, we do not need to import React from react like we did previously.
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Site Components:
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateBlog from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFoundComponent from './components/NotFoundPage'

function App() {
  // const title = 'Welcome to the new React blog'
  // const likes = 50;
  // const link = 'http://www.google.com'

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <h1>{title}</h1>
          <p>Liked {likes} times</p>

          <a href={link}>Google Site</a> */}
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/create"><CreateBlog /></Route>
            <Route path="/blogs/:id"><BlogDetails /></Route>
            <Route path="*"><NotFoundComponent /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
