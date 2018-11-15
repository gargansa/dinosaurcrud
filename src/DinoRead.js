import React from 'react'
import { Button, Form, FormGroup, Label } from 'reactstrap';

export default class DinoRead extends React.Component {
    constructor(props) {
        super(props)
        console.log("DinoRead")
        console.log(this.props.dinosaurs)
    }
    render() {
        console.log("DinoReadRender")
        console.log(this.props.dinosaurs)

        this.dinoNameList = this.props.dinosaurs.map((item) =>
            <Form key={item.id}>
                <FormGroup>
                    <Label>Name: {item.name}</Label>
                </FormGroup>
                <FormGroup>
                    <Label>Weight: {item.weight}</Label>
                </FormGroup>
                <FormGroup>
                    <Label>Height: {item.height}</Label>
                </FormGroup>
                <FormGroup>
                    <Label>Era: {item.era}</Label>
                </FormGroup>
                <FormGroup>
                    <Label>Diet: {item.diet}</Label>
                </FormGroup>
            </Form>
        )
        return (
            <div>
                {this.dinoNameList}
            </div>
        )
    }
}
