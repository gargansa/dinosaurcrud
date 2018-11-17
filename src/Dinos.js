import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateDinoForm from './CreateDinoForm.js';
import DisplayDinoForm from './DisplayDinoForm.js';
import DinoSlides from './Carousel.js'

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

            dinosaurs: [
            ]
        }
    }

    componentDidMount() {
        let initialDinosaurs = []
        initialDinosaurs = JSON.parse(localStorage.getItem("dinoStorage"));
        if (initialDinosaurs) { if (initialDinosaurs.length === 0) { initialDinosaurs = 0 } } // make sure its not an empty array
        if (!initialDinosaurs) {
            initialDinosaurs = [
                { id: 0, name: 'Parasaurolophus', height: '16ft', weight: '2268 kg', era: 'Late Cretaceous', diet: 'Herbivore' },

                { id: 1, name: 'Brachiosaurus', height: '31ft', weight: '35000 kg', era: 'Late Jurassic', diet: 'Herbivore' },

                { id: 2, name: 'Gallimimus', height: '6ft', weight: '440 kg', era: 'Late Cretaceous', diet: 'Insectivorous' },

                { id: 3, name: 'Dilophosaurus', height: '6ft', weight: '283 kg', era: 'Early Jurassic', diet: 'Scavenger' },

                { id: 4, name: 'Triceratops', height: '9ft', weight: '10886 kg', era: 'Late Cretaceous', diet: 'Herbivore' },

                { id: 5, name: 'Tyrannosaurus', height: '12ft', weight: '7257 kg', era: 'Late Cretaceous', diet: 'Carnivore' },

                { id: 6, name: 'Velociraptor', height: '2ft', weight: '15 kg', era: 'Late Cretaceous', diet: 'Carnivore' }

            ];
        }
        this.setState({ dinosaurs: initialDinosaurs })
    }

    render() {
        return (
            <Router>
                <div>

                    <div>
                        <Navbar color="light" light expand="md">
                            <NavbarBrand href="/">DinosaurCRUD 2018</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Options
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <Link to="/">
                                                <DropdownItem>
                                                    Home
                                                </DropdownItem>
                                            </Link>
                                            <DropdownItem divider />
                                            <Link to="/display">
                                                <DropdownItem>
                                                    DisplayDinos
                                                </DropdownItem>
                                            </Link>
                                            <Link to="/create">
                                                <DropdownItem>
                                                    Create
                                                </DropdownItem>
                                            </Link>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>


                    <Route exact path="/" component={DinoSlides} />
                    <Route exact path="/display"
                        render={() => <DisplayDinoForm
                            dinosaurs={this.state.dinosaurs}
                            dinoToEdit={this.state.dinoToEdit}
                            handleChange={this.handleChange}
                        />
                        }
                    />
                    <Route exact path="/create" component={CreateDinoForm} />
                </div>
            </Router>
        );
    }
};





