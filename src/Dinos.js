import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { Container, Row, Col } from 'reactstrap';
export default class Dinos extends React.Component {
    constructor() {
        super()
        this.state = {
            dinoToEdit: {
                id: -1,
                name: "",
                height: "",
                weight: "",
                era: "",
                diet: "",
            },
            name: "",
            height: "",
            weight: "",
            era: "",
            diet: "",
            dinosaurs: [
            ]
        }
        this.deleteDino = this.deleteDino.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitCreate = this.submitCreate.bind(this);
        this.updateDino = this.updateDino.bind(this);
        this.submitEdit = this.submitEdit.bind(this)
        this.editDino = this.editDino.bind(this);
    } // ends constructor 

    //Used for Edit and Create
    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
        console.log(event.target.value)
    }

    //Create functions
    componentDidMount() {
        let initialDinosaurs = []
        initialDinosaurs = JSON.parse(localStorage.getItem("dinoStorage"));
        if (initialDinosaurs) { if (initialDinosaurs.length === 0) { initialDinosaurs = 0 } } // make sure its not an empty array
        if (!initialDinosaurs) {
            initialDinosaurs = [
                { id: 0, name: 'Parasaurolophus', height: '16ft', weight: '2268 kg', era: 'Late Cretaceous', diet: 'Herbivore' },

                { id: 1, name: 'Brachiosaurus', height: '31ft', weight: '35000 kg', era: 'Late Jurassic', diet: 'Herbivore' },

                { id: 2, name: 'Gallimimus', height: '6ft', weight: '440 kg', era: 'Late Cretaceous', diet: 'Insectivorous' },

                { id: 3, name: 'Dilophosaurus', height: '6ft', weight: '283 kg', era: 'Early Jurassic', diet: 'Scavenger' },

                { id: 4, name: 'Triceratops', height: '9ft', weight: '10886 kg', era: 'Late Cretaceous', diet: 'Herbivore' },

                { id: 5, name: 'Tyrannosaurus', height: '12ft', weight: '7257 kg', era: 'Late Cretaceous', diet: 'Carnivore' },

                { id: 6, name: 'Velociraptor', height: '2ft', weight: '15 kg', era: 'Late Cretaceous', diet: 'Carnivore' }

            ];
        }
        this.setState({ dinosaurs: initialDinosaurs })
    }

    submitCreate(event) {
        event.preventDefault();
        let currentId = 0;
        if (this.state.dinosaurs.length > 0) {
            currentId = this.state.dinosaurs[this.state.dinosaurs.length - 1].id
        }

        let dummyDino = { id: currentId + 1, name: this.state.name, height: this.state.height, weight: this.state.weight, era: this.state.era, diet: this.state.diet }
        let theDinos = this.state.dinosaurs.slice()
        theDinos.push(dummyDino)
        this.setState({ dinosaurs: theDinos })
        localStorage.setItem("dinoStorage", JSON.stringify(theDinos));
    }

    //Delete Functions
    deleteDino(name) {
        let newDinos = this.state.dinosaurs.filter(dinosaur => dinosaur.name !== name)
        this.setState({ dinosaurs: newDinos })
        localStorage.setItem("dinoStorage", JSON.stringify(newDinos));
    }

    //Edit Functions
    editDino(dino) {
        //this is when the button is clicked to populate edit fields
        this.setState({ dinoToEdit: dino })
    }

    submitEdit(event) {
        event.preventDefault()
        //BUILD UPDATED DINOSAUR
        let updatedDino = {
            id: this.state.dinoToEdit.id,
            name:this.state.name.length ? this.state.name:this.state.dinoToEdit.name,
            height:this.state.height.length ? this.state.height:this.state.dinoToEdit.height,
            weight:this.state.weight.length ? this.state.weight:this.state.dinoToEdit.weight,
            era:this.state.era.length ? this.state.era:this.state.dinoToEdit.era,
            diet:this.state.diet.length ? this.state.diet:this.state.dinoToEdit.diet
        }
        this.updateDino(updatedDino)
    }

    updateDino(newDino) {
        let newDinoObj = this.state.dinosaurs.map((oldDino) => {
            if (oldDino.id === newDino.id) {
                return newDino;
            }
            else {
                return oldDino;
            }
        })
        this.setState({ dinosaurs: newDinoObj })
        localStorage.setItem("dinoStorage", JSON.stringify(newDinoObj));
    }


    //Display Functions
    displayEditDinos() {
        return (
            <Form>
                <FormGroup>
                    <Label for="dinoName">Name of Dino</Label>
                    <Input type="text" defaultValue={this.state.dinoToEdit.name} name="name" id="dinoName" onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="dinoHeight">Height</Label>
                    <Input type="text" defaultValue={this.state.dinoToEdit.height} name="height" id="dinoHeight" onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="dinoWeight">Weight</Label>
                    <Input type="text" defaultValue={this.state.dinoToEdit.weight} name="weight" id="dinoWeight" onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="dinoEra">Era</Label>
                    <Input type="text" name="era" defaultValue={this.state.dinoToEdit.era} id="dinoEra" onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="dinoDiet">Diet</Label>
                    <Input type="text" defaultValue={this.state.dinoToEdit.diet} name="diet" id="dinoDiet" onChange={this.handleChange} />
                </FormGroup>
                <Button onClick={this.submitEdit}>Submit Edit</Button>
            </Form>)
    }

    displayReadDinos() {
        return (
            this.dinoNames = this.state.dinosaurs.map((item) =>
                <FormGroup key={item.id}>
                    <Row>
                    <Label>{item.name}</Label>
                    </Row>
                    <Row>
                    <Button onClick={() => { this.deleteDino(item.name) }}>Delete</Button>
                    <Button onClick={() => { this.editDino(item) }}>Edit</Button>
                    </Row>
                </FormGroup>)
        )
    }

    displayCreateDinos() {
        return (
            <Form>
                <FormGroup>
                    <Label for="dinoName">Name of Dino</Label>
                    <Input type="text" name="name" id="dinoName" defaultValue="Spinosaurus" onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="dinoHeight">Height</Label>
                    <Input type="text" name="height" id="dinoHeight" defaultValue="11 ft" onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="dinoWeight">Weight</Label>
                    <Input type="text" name="weight" id="dinoWeight" defaultValue="1000 kg" onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="dinoEra">Era</Label>
                    <Input type="text" name="era" id="dinoEra" defaultValue="Late Jurassic" onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="dinoDiet">Diet</Label>
                    <Input type="text" name="diet" id="dinoDiet" defaultValue="Mostly Beats" onChange={this.handleChange} />
                </FormGroup>
                <Button onClick={this.submitCreate}>Submit Create</Button>
            </Form>
        )
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col> <h1>Read</h1>
                            {this.displayReadDinos()}
                        </Col>
                        <Col> <h1>Edit</h1>
                            {this.displayEditDinos()}
                        </Col>
                        <Col><h1>Create</h1>
                            {this.displayCreateDinos()}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};





