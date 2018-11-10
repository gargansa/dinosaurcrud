import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dinos from './Dinos'
import Navigation from './Navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Dinos />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
