import React, { Component } from 'react';
import Main from "./components/Main"
import Explore from "./components/Explore"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Explore/>
      </div>
    );
  }
}

export default App;
