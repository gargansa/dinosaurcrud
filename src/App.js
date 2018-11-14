import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dinos from './Dinos'
import Navigation from './Navbar.js'
import DinoSlides from './Carousel.js'
import RouterComponent from './RouterComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
        <header className="App-header">
          <RouterComponent />
          {/* <DinoSlides /> */}
        </header>
      </div>
    );
  }
}

export default App;
