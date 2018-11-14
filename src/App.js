import React, { Component } from 'react';
import './App.css';
import Dinos from './Dinos'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateDino from './createDino.js';
import DestroyDino from './destroyDino.js';
import EditDino from './editDino.js';
import ReadDino from './readDino.js'
// import Dinos from "./Dinos";


class App extends Component {
constructor() {
  super();
  let dino = JSON.parse(localStorage.getItem("dinoStorage"));
        if (!dino) {
            this.state =  { dino:[
                { id: 0, name: 'Parasaurolophus', height: '16ft', weight: '2268 kg', era: 'Late Cretaceous', diet: 'Herbivore' },

                { id: 1, name: 'Brachiosaurus', height: '31ft', weight: '35000 kg', era: 'Late Jurassic', diet: 'Herbivore' },

                { id: 2, name: 'Gallimimus', height: '6ft', weight: '440 kg', era: 'Late Cretaceous', diet: 'Insectivorous' },

                { id: 3, name: 'Dilophosaurus', height: '6ft', weight: '283 kg', era: 'Early Jurassic', diet: 'Scavenger' },

                { id: 4, name: 'Triceratops', height: '9ft', weight: '10886 kg', era: 'Late Cretaceous', diet: 'Herbivore' },

                { id: 5, name: 'Tyrannosaurus', height: '12ft', weight: '7257 kg', era: 'Late Cretaceous', diet: 'Carnivore' },

                { id: 6, name: 'Velociraptor', height: '2ft', weight: '15 kg', era: 'Late Cretaceous', diet: 'Carnivore' }

            ]
          };
          }
}

  render() {
    return (
      <div className="App">


        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Read Dino</Link>
              </li>
              <li>
                <Link to="/create">Create Dino</Link>
              </li>
              <li>
                <Link to="/destroy">Destroy Dino</Link>
              </li>
              <li>
                <Link to="/update">Update Dino</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={ReadDino} />
            <Route exact path="/create" component={CreateDino} />
            <Route path="/destroy" component={DestroyDino} />
            <Route path="/edit" component={EditDino} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
