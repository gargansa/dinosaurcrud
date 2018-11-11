import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class Dinos extends React.Component{
    constructor(){
        super()
        this.state = {
            name:"",
            height:"",
            weight:"",
            era:"",
            diet:"",
            dinosaurs:[
            {name: 'Parasaurolophus', height:'16ft', weight:'2268 kg', era:'Late Cretaceous', diet: 'Herbivore'},

            {name: 'Brachiosaurus', height:'31ft', weight:'35000 kg', era: 'Late Jurassic', diet:'Herbivore'},
            
            {name: 'Gallimimus', height:'6ft', weight:'440 kg', era: 'Late Cretaceous', diet: 'Insectivorous'},
            
            {name: 'Dilophosaurus', height: '6ft', weight: '283 kg', era: 'Early Jurassic',  diet: 'Scavenger'},
            
            {name: 'Triceratops', height: '9ft', weight: '10886 kg',  era: 'Late Cretaceous', diet: 'Herbivore'},
            
            {name: 'Tyrannosaurus', height: '12ft', weight: '7257 kg', era: 'Late Cretaceous', diet: 'Carnivore'},
            
            {name: 'Velociraptor', height: '2ft', weight: '15 kg', era: 'Late Cretaceous', diet: 'Carnivore'}
            ]
        }
        this.deleteDino = this.deleteDino.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.createDino = this.createDino.bind(this);
    } // ends constructor 

    handleChange(event) {
        const name = event.target.name;
        this.setState({
        [name]: event.target.value
        });
    }

    createDino(event) {
        event.preventDefault();
        let dummyDino = {name: this.state.name, height: this.state.height, weight: this.state.weight, era: this.state.era, diet: this.state.diet}
        let theDinos = this.state.dinosaurs.slice()
        theDinos.push(dummyDino)
        this.setState({dinosaurs: theDinos})
    }

    deleteDino(name){
       let newDinos = this.state.dinosaurs.filter(dinosaur => dinosaur.name !== name)
        this.setState({dinosaurs: newDinos})
    }
    editDino(){
        
    }
    readDinos(){
        this.dinoNames = this.state.dinosaurs.map((item)=> 
        <li key={item.name}><h1 color="aquamarine">{item.name}</h1>
        <h2>{item.height}</h2>
        <h2>{item.weight}</h2>
        <h2>{item.era}</h2>
        <h2>{item.diet}</h2>
          <button onClick={()=>{this.deleteDino(item.name)}}>Delete</button>
          <button onClick={()=>{this.editDino()}}>Edit</button>
        </li>
        )
    }
    //Parameters: take in the user input
    //Return: setting state of dino
    //Example: user clicks edit and type T-Rex displays "T-Rex"
    //Pseudo Code: make button
    // onClick function that updates object
    // Similar to createDino
    // create read function 


    //create a Form with:
        //input fields, submit button
        //populate that info on the page


    render(){
        this.readDinos()
        return (
            <div>
                <ul>{this.dinoNames}</ul>
                <Form>
                    <FormGroup>
                        <Label for="dinoName">Name of Dino</Label>
                        <Input type="text" name="name" id="dinoName" placeholder="Spinosaurus" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoHeight">Height</Label>
                        <Input type="text" name="height" id="dinoHeight" placeholder="11 ft" onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoWeight">Weight</Label>
                        <Input type="text" name="weight" id="dinoWeight" placeholder="1000 kg" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoEra">Era</Label>
                        <Input type="text" name="era" id="dinoEra" placeholder="Late Jurassic" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoDiet">Diet</Label>
                        <Input type="text" name="diet" id="dinoDiet" placeholder="Mostly Beats" onChange={this.handleChange} />
                    </FormGroup>
                </Form>
                <button onClick={this.createDino}>Submit</button>
                
            </div>
        );
}
};


  
    
  
