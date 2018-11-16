import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Dinos from './Dinos'
import DinoSlides from './Carousel.js'

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <header className="App-header"> */}
        {/* </header> */}
        <Dinos />
        <DinoSlides />
      </div>
    );
  }
}

export default App;
