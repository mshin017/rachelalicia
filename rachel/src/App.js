import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Main from "./components/Main"
import Gallery from "./components/Gallery"
import About from "./components/About"
// import Navbar from "./components/Navbar"
import Home from "./components/Home"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        {/* <Navbar/> */}
         <Route exact path='/' component={Home}/>
         <Route path='/about' component={About}/>
         <Route path='/main' component={Main}/>
         <Route path='/gallery' component={Gallery}/>
        </div>
      </Router>

    );
  }
}

export default App;
