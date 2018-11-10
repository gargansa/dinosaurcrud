import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Dinos extends React.Component{
    constructor(){
        super()
        this.state = {
            dinosaurs:[
            {name: 'Parasaurolophus', height:'16ft', weight:'2268 kg', era:'Late Cretaceous', diet: 'Herbivore'},

            {name: 'Brachiosaurus', height:'31ft', weight:'35000 kg', era: 'Late Jurassic', diet:'Herbivore'},
            
            {name: 'Gallimimus', height:'6ft', weight:'440 kg', era: 'Late Cretaceous', diet: 'Insectivorous'},
            
            {name: 'Dilophosaurus', height: '6ft', weight: '283 kg', era: 'Early Jurassic',  diet: 'Scavenger'},
            
            {name: 'Triceratops', height: '9ft', weight: '10886 kg',  era: 'Late Cretaceous', diet: 'Herbivore'},
            
            {name: 'Tyrannosaurus', height: '12ft', weight: '7257 kg', era: 'Late Cretaceous', diet: 'Carnivore'},
            
            {name: 'Velociraptor', height: '2ft', weight: '15 kg', era: 'Late Cretaceous', diet: 'Carnivore'}
            ]
        }
        this.deleteDino = this.deleteDino.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } // ends constructor 

    // handleChange(event) {
    //     this.setState({value: event.name});
    // }

    handleSubmit(event) {
        event.preventDefault();
        let dummyDino = {name: 'Spinosaurus', height: '9ft', weight: '2000 kg', era: 'Pre Jesus', diet: 'Light Salad'}
        //duplicate array
        let theDinos = this.state.dinosaurs.slice()
        theDinos.push(dummyDino)
        console.log(theDinos)
        //push to array
        //.push(dummyDino)
        this.setState({dinosaurs: theDinos})
    }

    deleteDino(name){
       // e.persist()
       let newDinos = this.state.dinosaurs.filter(dinosaur => dinosaur.name !== name)
        //console.log(newDinos)
        this.setState({dinosaurs: newDinos})
    
    }
    //create a Form with:
        //input fields, submit button
        //populate that info on the page



    render(){
        this.dinoNames = this.state.dinosaurs.map((item)=>
          <li key={item.name}>{item.name}<button onClick={()=>{this.deleteDino(item.name)}}>Delete</button></li>
      )
        return (
            <div>
                <ul>{this.dinoNames}</ul>
                <Form>
                    <FormGroup>
                        <Label for="dinoName">Name of Dino</Label>
                        <Input type="text" id="dinoName" placeholder="Spinosaurus" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoHeight">Height</Label>
                        <Input type="text" id="dinoHeight" placeholder="11 ft" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoWeight">Weight</Label>
                        <Input type="text" id="dinoWeight" placeholder="1000 kg" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoEra">Era</Label>
                        <Input type="text" id="dinoEra" placeholder="Late Jurassic" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dinoDiet">Diet</Label>
                        <Input type="text" id="dinoDiet" placeholder="Mostly Beats" />
                    </FormGroup>
                </Form>
                <button onClick={this.handleSubmit}>Submit</button>
                {/* <form onSubmit={this.handleSubmit}>
                    <label>
                        Name of Dinosaur:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Height:
                         <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Weight:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Era:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Diet:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label> */}
                    

                        {/* <input type="submit" value="Submit" />
                        </form> */}
                
            </div>
        );
}
};


// class EssayForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         value: 'Please write an essay about your favorite DOM element.'
//       };
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
    
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Essay:
//             <textarea value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }
  

export default Dinos;