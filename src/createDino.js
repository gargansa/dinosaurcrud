import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'




class CreateDino extends React.Component {

    constructor(props){
        super(props)
    }

render(){
return(


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
        <button onClick={this.createDino}>Submit</button>
    </Form>
    )}
    }
    export default CreateDino;