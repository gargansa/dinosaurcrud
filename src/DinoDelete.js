import React from 'react'
import { Button, Form, FormGroup, Label } from 'reactstrap';

export default class DinoDelete extends React.Component {

    constructor(props) {
        super(props)
        console.log("DinoDelete")
        console.log(this.props.dinosaurs)
        this.destroy = this.destroy.bind(this)
    }
    destroy(item) {
        console.log(item)
        // let theDinos = this.props.dinosaurs.filter(dinosaur => dinosaur.id !== id)
        // localStorage.setItem("dinoStorage", JSON.stringify(theDinos));
    }

    render() {
        this.dinoNameList = this.props.dinosaurs.map((item) =>
            <Form key={item.id}>
                <FormGroup>
                    <Label>Name: {item.name}</Label>
                </FormGroup>
                <Button onClick={this.destroy(item.id)} >Delete</Button>
            </Form>
        )

        return (
            <div>
                {this.dinoNameList}
            </div>
        )
    }
}
