import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import EditDino from './editDino'
import { Container, Row, Col } from 'reactstrap';
export default class Dinos extends React.Component {
    constructor() {
        super()
        this.state = {
            dinoToEdit: {
                id: -1,
                name: "",
                height: "",
                weight: "",
                era: "",
                diet: "",
            },
            name: "",
            height: "",
            weight: "",
            era: "",
            diet: "",
            dinosaurs: []
        }
        this.deleteDino = this.deleteDino.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateDino = this.updateDino.bind(this);
    } // ends constructor 

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }
    componentDidMount() {
        let dino = JSON.parse(localStorage.getItem("dinoStorage"));
        if (!dino) {
            dino = [
                { id: 0, name: 'Parasaurolophus', height: '16ft', weight: '2268 kg', era: 'Late Cretaceous', diet: 'Herbivore' },

            ];
        }
        console.log(dino)
        this.setState({ dinosaurs: dino })

    }
    


    editDino(dino) {
        //event.preventDefault();
        // let testDino = dino.name;
        this.setState({ dinoToEdit: dino })

    }

    updateDino(newDino) {
        let newDinoObj = this.state.dinosaurs.map((oldDino) => {
            if (oldDino.id === newDino.id) {
                return newDino;
            }
            else {
                return oldDino;
            }
        })
        this.setState({ dinosaurs: newDinoObj })
        localStorage.setItem("dinoStorage", JSON.stringify(newDinoObj));
    }

    render() {
        this.readDinos()
        return (
            <div>
                <Container>
                    <Row>
                        <Col><ul>{this.dinoNames}</ul></Col>
                        <Col> <h1>Edit Dinos OMG</h1>
                            <EditDino
                                updateDino={this.updateDino}
                                dino={this.state.dinoToEdit}
                            ></EditDino></Col>


                    </Row>
                </Container>
            </div>
        );
    }
};





