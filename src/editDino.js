import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class EditDino extends React.Component {
    constructor(props) {
        super(props)
        // this.props.name = "something"
        // man alive
        this.state = {
            name: "",
            height: "",
            weight: "",
            era: "",
            diet: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    handleSubmit(event) {
        event.preventDefault()
        //BUILD UPDATED DINOSAUR
        let updatedDino = {
            id: this.props.dino.id,
            name: this.state.name.length ? this.state.name : this.props.dino.name,
            height: this.state.height.length ? this.state.height : this.props.dino.height,
            weight: this.state.weight.length ? this.state.weight : this.props.dino.weight,
            era: this.state.era.length ? this.state.era : this.props.dino.era,
            diet: this.state.diet.length ? this.state.diet : this.props.dino.diet
        }
        this.props.updateDino(updatedDino)
    }
    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }
    render() {
        //console.log(this.props.dino.name)
        return (

            <div>

                <Form>
                    <FormGroup>
                        <Label for="dinoName">Name of Dino</Label>
                        <Input type="text" defaultValue={this.props.dino.name} name="name" id="dinoName" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoHeight">Height</Label>
                        <Input type="text" defaultValue={this.props.dino.height} name="height" id="dinoHeight" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoWeight">Weight</Label>
                        <Input type="text" defaultValue={this.props.dino.weight} name="weight" id="dinoWeight" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoEra">Era</Label>
                        <Input type="text" name="era" defaultValue={this.props.dino.era} id="dinoEra" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoDiet">Diet</Label>
                        <Input type="text" defaultValue={this.props.dino.diet} name="diet" id="dinoDiet" onChange={this.handleChange} />
                    </FormGroup>
                </Form>
                <button onClick={this.handleSubmit}>Submit</button>

            </div>
        )
    }


}