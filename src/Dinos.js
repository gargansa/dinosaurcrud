import React from 'react';


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
    } // ends constructor 
    deleteDino(name){
       // e.persist()
       let newDinos = this.state.dinosaurs.filter(dinosaur => dinosaur.name !== name)
        console.log(newDinos)
        this.setState({dinosaurs: newDinos})
    
    }


    render(){
        this.dinoNames = this.state.dinosaurs.map((item)=>
          <li key={item.name}>{item.name}<button onClick={()=>{this.deleteDino(item.name)}}>Delete</button></li>
      )
        return (
            <div>
                <ul>{this.dinoNames}</ul>
            </div>
        );
}
};

export default Dinos;