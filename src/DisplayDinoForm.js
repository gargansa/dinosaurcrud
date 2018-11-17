import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
export default class DisplayDinoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state =props
        
        this.deleteDino = this.deleteDino.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateDino = this.updateDino.bind(this);
        this.submitEdit = this.submitEdit.bind(this)
        this.editDino = this.editDino.bind(this);

    }
    handleChange(event) {
        let name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    //display via alert
    readDino(item) {
        alert(
            "ID: " + item.id + "\n" +
            "Name: " + item.name + "\n" +
            "Height: " + item.height + "\n" +
            "Weight: " + item.weight + "\n" +
            "Era: " + item.era + "\n" +
            "Diet: " + item.diet
        )
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
            name: this.state.name.length ? this.state.name : this.state.dinoToEdit.name,
            height: this.state.height.length ? this.state.height : this.state.dinoToEdit.height,
            weight: this.state.weight.length ? this.state.weight : this.state.dinoToEdit.weight,
            era: this.state.era.length ? this.state.era : this.state.dinoToEdit.era,
            diet: this.state.diet.length ? this.state.diet : this.state.dinoToEdit.diet
        }
        this.updateDino(updatedDino)
        this.setState({
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
            //reset the name 
        })
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
                        <Button onClick={() => { this.readDino(item) }}>Read</Button>
                        <Button onClick={() => { this.deleteDino(item.name) }}>Delete</Button>
                        <Button onClick={() => { this.editDino(item) }}>Edit</Button>
                    </Row>
                </FormGroup>)
        )
    }
    render() {
        return (
            <Row>
                <Col md={6}>
                {this.displayReadDinos()}
                </Col>
                <Col md={6}>
                {this.displayEditDinos()}
                </Col>
            </Row>
        )
    }
}