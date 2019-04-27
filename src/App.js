import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NoMatch from './components/NoMatch'
import About from './components/About'
import Resume from './components/Resume'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resume" component={Resume} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
