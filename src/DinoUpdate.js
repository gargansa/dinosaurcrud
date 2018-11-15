import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default class EditDino extends React.Component {
    constructor(props){
        super(props)
        console.log("DinoUpdate")
        console.log(this.props.dinosaurs)

    }
    modify(){
        //modify dino here
    }
    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="dinoName">Name of Dino</Label>
                        <Input type="text" defaultValue={this.props.dinosaurs.name} name="name" id="dinoName" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoHeight">Height</Label>
                        <Input type="text" defaultValue={this.props.dinosaurs.height} name="height" id="dinoHeight" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoWeight">Weight</Label>
                        <Input type="text" defaultValue={this.props.dinosaurs.weight} name="weight" id="dinoWeight" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoEra">Era</Label>
                        <Input type="text" name="era" defaultValue={this.props.dinosaurs.era} id="dinoEra" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoDiet">Diet</Label>
                        <Input type="text" defaultValue={this.props.dinosaurs.diet} name="diet" id="dinoDiet" onChange={this.handleChange} />
                    </FormGroup>
                </Form>
                <button onClick={this.modify}>Submit</button>
            </div>
        )
    }
}
