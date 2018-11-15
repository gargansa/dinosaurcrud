import React, { Component } from 'react';
import './App.css';
// import DinoCreate from './DinoCreate';
// import DinoRead from './DinoRead'; //working
// import DinoUpdate from './DinoUpdate'; //not
import DinoDelete from './DinoDelete'; //not

export default class App extends Component {
  destroy(id) {
    let theDinos = this.props.dinosaurs.filter(dinosaur => dinosaur.id !== id)
    localStorage.setItem("dinoStorage", JSON.stringify(theDinos));
  }
  render() {
    let dinosaurs = [];
    dinosaurs = JSON.parse(localStorage.getItem("dinoStorage"));
    if (!dinosaurs) {
      dinosaurs = [
        { id: 0, name: 'Parasaurolophus', height: '16ft', weight: '2268 kg', era: 'Late Cretaceous', diet: 'Herbivore' },
        {id: 1, name: 'Brachiosaurus', height:'31ft', weight:'35000 kg', era: 'Late Jurassic', diet:'Herbivore'},
        {id: 2, name: 'Gallimimus', height:'6ft', weight:'440 kg', era: 'Late Cretaceous', diet: 'Insectivorous'},
        {id: 3, name: 'Dilophosaurus', height: '6ft', weight: '283 kg', era: 'Early Jurassic',  diet: 'Scavenger'},
        {id: 4, name: 'Triceratops', height: '9ft', weight: '10886 kg',  era: 'Late Cretaceous', diet: 'Herbivore'},
        {id: 5, name: 'Tyrannosaurus', height: '12ft', weight: '7257 kg', era: 'Late Cretaceous', diet: 'Carnivore'},
        {id: 6, name: 'Velociraptor', height: '2ft', weight: '15 kg', era: 'Late Cretaceous', diet: 'Carnivore'}
      ]
      
    }
    localStorage.setItem("dinoStorage", JSON.stringify(dinosaurs));
    console.log("Dinos Are Created")
    console.log(dinosaurs.length)
    return (
      <div>
        {/* <DinoCreate dinosaurs={dinosaurs}/> */}
        {/* <DinoRead dinosaurs={dinosaurs}/> */}
        {/* <DinoUpdate dinosaurs={dinosaurs}/> */}
        <DinoDelete dinosaurs={dinosaurs}/>
      </div>
    );
  }
}


