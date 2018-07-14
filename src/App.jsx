import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route component={Home} exact path="/" />
          <Route component={News} path="/news" />
          <Route component={About} path="/about" />
        </div>
      </Router>
    );
  }
}

export default App;
