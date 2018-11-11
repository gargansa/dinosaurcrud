import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class EditDino extends React.Component{
    constructor(props){
        super(props)
        // this.props.name = "something"
        // man alive
    }
    
    render(){
        console.log(this.props.dino.name)
        return (

            <div>
                
                <Form>
                    <FormGroup>
                        <Label for="dinoName">Name of Dino</Label>
                        <Input type="text" value={this.props.dino.name} name="name" id="dinoName" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoHeight">Height</Label>
                        <Input type="text" value={this.props.dino.height} name="height" id="dinoHeight" onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoWeight">Weight</Label>
                        <Input type="text" value={this.props.dino.weight} name="weight" id="dinoWeight" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoEra">Era</Label>
                        <Input type="text" name="era" value={this.props.dino.era} id="dinoEra" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoDiet">Diet</Label>
                        <Input type="text" value={this.props.dino.diet} name="diet" id="dinoDiet" onChange={this.handleChange} />
                    </FormGroup>
                </Form>
                <button onClick={this.editDino}>Submit</button>
                
            </div>
        )
    }


}