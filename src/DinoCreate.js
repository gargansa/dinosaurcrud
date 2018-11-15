import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'

export default class DinoCreate extends React.Component {
    constructor(props){
        super(props)
        console.log("DinoCreate")
        console.log(this.props.dinosaurs)
        this.destroy = this.destroy.bind(this)
    }
    spawn(){
        let currentId =0;
        if (this.props.dinosaurs.length > 0){
            currentId = this.props.dinosaurs[this.props.dinosaurs.length-1].id
        }
        
        let newDino = {
            id: currentId+1,
            name: this.state.name,
            height: this.state.height, 
            weight: this.state.weight, 
            era: this.state.era, 
            diet: this.state.diet
        }
        this.props.dinosaurs.push(newDino)
        localStorage.setItem("dinoStorage", JSON.stringify(this.props.dinosaurs));
    }
    
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="dinoName">Name of Dino</Label>
                    <Input type="text" name="name" id="dinoName" placeholder="Spinosaurus" onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="dinoHeight">Height</Label>
                    <Input type="text" name="height" id="dinoHeight" placeholder="11 ft" onChange={this.handleChange} />
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
                <button onClick={this.spawn}>Submit</button>
            </Form>
        )
    }
}
