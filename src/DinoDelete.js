import React from 'react'
import { Button, Form, FormGroup, Label } from 'reactstrap';

export default class DinoDelete extends React.Component {

    constructor(props) {
        super(props)
        console.log("DinoDelete")
        console.log(this.props.dinosaurs)
    }
    destroy(e) {
        console.log(e)
        // let theDinos = this.props.dinosaurs.filter(dinosaur => dinosaur.id !== id)
        // localStorage.setItem("dinoStorage", JSON.stringify(theDinos));
    }

    render() {
        this.dinoNameList = this.props.dinosaurs.map((item) =>
            <Form key={item.id}>
                <FormGroup>
                    <Label>Name: {item.name}</Label>
                </FormGroup>
                <Button key={item.id} onClick={this.destroy} >Delete</Button>
            </Form>
        )

        return (
            <div>
                {this.dinoNameList}
            </div>
        )
    }
}
