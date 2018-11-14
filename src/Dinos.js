import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import EditDino from './editDino'
import { Container, Row, Col } from 'reactstrap';
export default class Dinos extends React.Component{
    constructor(){
        super()
        this.state = {
            dinoToEdit: {
                id: -1,
                name:"",
                height:"",
                weight:"",
                era:"",
                diet:"",
            },
            name:"",
            height:"",
            weight:"",
            era:"",
            diet:"",
            dinosaurs:[
            // {id: 0, name: 'Parasaurolophus', height:'16ft', weight:'2268 kg', era:'Late Cretaceous', diet: 'Herbivore'},

            // {id: 1, name: 'Brachiosaurus', height:'31ft', weight:'35000 kg', era: 'Late Jurassic', diet:'Herbivore'},
            
            // {id: 2, name: 'Gallimimus', height:'6ft', weight:'440 kg', era: 'Late Cretaceous', diet: 'Insectivorous'},
            
            // {id: 3, name: 'Dilophosaurus', height: '6ft', weight: '283 kg', era: 'Early Jurassic',  diet: 'Scavenger'},
            
            // {id: 4, name: 'Triceratops', height: '9ft', weight: '10886 kg',  era: 'Late Cretaceous', diet: 'Herbivore'},
            
            // {id: 5, name: 'Tyrannosaurus', height: '12ft', weight: '7257 kg', era: 'Late Cretaceous', diet: 'Carnivore'},
            
            // {id: 6, name: 'Velociraptor', height: '2ft', weight: '15 kg', era: 'Late Cretaceous', diet: 'Carnivore'}
            ]
        }
        this.deleteDino = this.deleteDino.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.createDino = this.createDino.bind(this);
        this.updateDino= this.updateDino.bind(this);
        //this.editDino = this.editDino.bind(this);
    } // ends constructor 

    handleChange(event) {
        const name = event.target.name;
        this.setState({
        [name]: event.target.value
        });
    }
    componentDidMount(){
        let dino = JSON.parse(localStorage.getItem("dinoStorage"));
        if (!dino){
            dino = [
                {id: 0, name: 'Parasaurolophus', height:'16ft', weight:'2268 kg', era:'Late Cretaceous', diet: 'Herbivore'},

                {id: 1, name: 'Brachiosaurus', height:'31ft', weight:'35000 kg', era: 'Late Jurassic', diet:'Herbivore'},
            
                {id: 2, name: 'Gallimimus', height:'6ft', weight:'440 kg', era: 'Late Cretaceous', diet: 'Insectivorous'},
            
                {id: 3, name: 'Dilophosaurus', height: '6ft', weight: '283 kg', era: 'Early Jurassic',  diet: 'Scavenger'},
            
                {id: 4, name: 'Triceratops', height: '9ft', weight: '10886 kg',  era: 'Late Cretaceous', diet: 'Herbivore'},
            
                {id: 5, name: 'Tyrannosaurus', height: '12ft', weight: '7257 kg', era: 'Late Cretaceous', diet: 'Carnivore'},
            
                {id: 6, name: 'Velociraptor', height: '2ft', weight: '15 kg', era: 'Late Cretaceous', diet: 'Carnivore'}

            ];
        }
        console.log(dino)
        this.setState({dinosaurs: dino})
        
    }
    createDino(event) {
        event.preventDefault();
        let currentId =0;
        if (this.state.dinosaurs.length > 0){
            currentId = this.state.dinosaurs[this.state.dinosaurs.length-1].id
        }
        
        let dummyDino = {id: currentId+1, name: this.state.name, height: this.state.height, weight: this.state.weight, era: this.state.era, diet: this.state.diet}
        let theDinos = this.state.dinosaurs.slice()
        theDinos.push(dummyDino)
        this.setState({dinosaurs: theDinos})
        localStorage.setItem("dinoStorage", JSON.stringify(theDinos));
    }

    deleteDino(name){
       let newDinos = this.state.dinosaurs.filter(dinosaur => dinosaur.name !== name)
        this.setState({dinosaurs: newDinos})
        localStorage.setItem("dinoStorage", JSON.stringify(newDinos));
    }
    editDino(dino){
        //event.preventDefault();
        // let testDino = dino.name;
        this.setState({dinoToEdit : dino})
        
    }
    readDinos(){
        this.dinoNames = this.state.dinosaurs.map((item)=> 
        <li key={item.id}><h1 color="aquamarine">{item.name}</h1>
          <button onClick={()=>{this.deleteDino(item.name)}}>Delete</button>
          <button onClick={()=>{this.editDino(item)}}>Edit</button>
        </li>
        )
    }
    updateDino(newDino){
        let newDinoObj = this.state.dinosaurs.map((oldDino) =>{
            if (oldDino.id === newDino.id){
                return newDino;
            }
            else{
                return oldDino;
            }
        })
        this.setState({dinosaurs:newDinoObj})
        localStorage.setItem("dinoStorage", JSON.stringify(newDinoObj));
    }

    render(){
        this.readDinos()
        return (
            <div>
                 <Container>
                    <Row>
                        <Col><ul>{this.dinoNames}</ul></Col>
                        <Col> <h1>Edit Dinos OMG</h1>
                        <EditDino
                        updateDino={this.updateDino}
                        dino={this.state.dinoToEdit}
                        ></EditDino></Col>
                    
                            
                    </Row>
                </Container>
            </div>
        );
}
};


  
    
  
