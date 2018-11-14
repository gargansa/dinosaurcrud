import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'




class CreateDino extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dinos:[]};
        this.createDino = this.createDino.bind(this);
    }
    createDino(event) {
        event.preventDefault();
        let currentId = 0;
        if (this.state.dinos.length > 0) {
            currentId = this.state.dinos[this.state.dinos.length - 1].id
        }

        let dummyDino = { id: currentId + 1, name: this.state.name, height: this.state.height, weight: this.state.weight, era: this.state.era, diet: this.state.diet }
        let theDinos = this.state.dinos.slice()
        theDinos.push(dummyDino)
        this.setState({ dinos: theDinos })
        localStorage.setItem("dinoStorage", JSON.stringify(theDinos));
    }
    componentDidMount(){
        let dinos = JSON.parse(localStorage.getItem("dinoStorage"));
        if (!dinos) {
        
            this.setState ( { dinos:[
                { id: 0, name: 'Parasaurolophus', height: '16ft', weight: '2268 kg', era: 'Late Cretaceous', diet: 'Herbivore' },
            ]})
        };
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
                <button onClick={this.createDino}>Submit</button>
            </Form>
        )
    }
}
export default CreateDino;