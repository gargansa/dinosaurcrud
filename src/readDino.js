import React from 'react'
class ReadDino extends React.Component {
    constructor(){
        super()
        this.state = {dinos:[]}
        
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
            this.dinoNames = this.state.dinos.map((item) =>
                <li key={item.id}><h1 color="aquamarine">{item.name}</h1>
                    <button onClick={() => { this.deleteDino(item.name) }}>Delete</button>
                    <button onClick={() => { this.editDino(item) }}>Edit</button>
                </li>
            )
        )
    }
}
export default ReadDino

