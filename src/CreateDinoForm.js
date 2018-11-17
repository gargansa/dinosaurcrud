import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class CreateDinoForm extends React.Component {
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.submitCreate = this.submitCreate.bind(this);
    }
    //Used for Edit and Create
    handleChange(event) {
        let name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
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
    render(){
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
}