import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
export default class DisplayDinoForm extends React.Component {
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


        this.displayEditDinos = this.displayEditDinos.bind(this);
            this.displayReadDinos = this.displayReadDinos.bind(this);

        }
        handleChange(event) {
            let name = event.target.name;
            this.setState({
                [name]: event.target.value
            });
        }

        //Display Functions
        displayEditDinos(props) {
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

        displayReadDinos(props) {
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
                <div>
                    <Col>
                        {this.displayEditDinos()}
                    </Col>
                    <Col>
                        {this.displayReadDinos()}
                    </Col>
                </div>
            )
        }
    }