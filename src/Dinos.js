import React from 'react';


class Dinos extends React.Component{
    constructor(){
        super()
        console.log("hello")
        this.dinos = {dinosaurs: [
            {name: 'Parasaurolophus', height:'16ft', weight:'2268 kg', era:'Late Cretaceous', diet: 'Herbivore'},

            {name: 'Brachiosaurus', height:'31ft', weight:'35000 kg', era: 'Late Jurassic', diet:'Herbivore'},
            
            {name: 'Gallimimus', height:'6ft', weight:'440 kg', era: 'Late Cretaceous', diet: 'Insectivorous'},
            
            {name: 'Dilophosaurus', height: '6ft', weight: '283 kg', era: 'Early Jurassic',  diet: 'Scavenger'},
            
            {name: 'Triceratops', height: '9ft', weight: '10886 kg',  era: 'Late Cretaceous', diet: 'Herbivore'},
            
            {name: 'Tyrannosaurus', height: '12ft', weight: '7257 kg', era: 'Late Cretaceous', diet: 'Carnivore'},
            
            {name: 'Velociraptor', height: '2ft', weight: '15 kg', era: 'Late Cretaceous', diet: 'Carnivore'}]
    }
    console.log(this.dinos);
    // this.dinosdinosaurs.map((item)=>{
    //     console.log(item)
    // })
}
    render(){
        return (
            <div>
                dinos
            </div>
        );
    
}
};

export default Dinos;