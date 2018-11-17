import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class CreateDinoForm extends React.Component {
    constructor(props){
        super(props)

    }
    
    render(){
        return (
            <Form>
                <FormGroup>
                    <Label for="dinoName">Name of Dino</Label>
                    <Input type="text" name="name" id="dinoName" defaultValue="Spinosaurus" onChange={this.props.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="dinoHeight">Height</Label>
                    <Input type="text" name="height" id="dinoHeight" defaultValue="11 ft" onChange={this.props.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="dinoWeight">Weight</Label>
                    <Input type="text" name="weight" id="dinoWeight" defaultValue="1000 kg" onChange={this.props.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="dinoEra">Era</Label>
                    <Input type="text" name="era" id="dinoEra" defaultValue="Late Jurassic" onChange={this.props.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="dinoDiet">Diet</Label>
                    <Input type="text" name="diet" id="dinoDiet" defaultValue="Mostly Beats" onChange={this.props.handleChange} />
                </FormGroup>
                <Button onClick={this.props.submitCreate}>Submit Create</Button>
            </Form>
        )
    }
}