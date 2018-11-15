import React from 'react'
import { Button, Form, FormGroup, Label } from 'reactstrap';

export default class DinoDelete extends React.Component {

    constructor(props) {
        super(props)
        console.log("DinoDelete")
        console.log(this.props.dinosaurs)
    }
    handleClick(e){
        const id = e.target.key;
        // this.props.destroy(id);
    }

    render() {
        this.dinoNameList = this.props.dinosaurs.map((item) =>
            <Form key={item.id}>
                <FormGroup>
                    <Label>Name: {item.name}</Label>
                </FormGroup>
                <Button key={item.id} onClick={this.handleClick.bind(this)} >Delete</Button>
            </Form>
        )

        return (
            <div>
                {this.dinoNameList}
            </div>
        )
    }
}
