import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class EditDino extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="dinoName">Name of Dino</Label>
                        <Input type="text" defaultValue={this.props.name} name="name" id="dinoName" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoHeight">Height</Label>
                        <Input type="text" defaultValue="" name="height" id="dinoHeight" onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoWeight">Weight</Label>
                        <Input type="text" defaultValue="" name="weight" id="dinoWeight" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoEra">Era</Label>
                        <Input type="text" name="era" defaultValue="" id="dinoEra" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoDiet">Diet</Label>
                        <Input type="text" name="diet" id="dinoDiet" onChange={this.handleChange} />
                    </FormGroup>
                </Form>
                <button onClick={this.editDino}>Submit</button>
                
            </div>
        )
    }


}