import React from 'react'


class DestroyDino extends React.Component {

    constructor(props){
        super(props)
        console.log(props.state.dino)
    // let newDinos = props.state.dino.filter(dinosaur => dinosaur.name !== name)
    // this.setState({dino: newDinos})
    // localStorage.setItem("dinoStorage", JSON.stringify(newDinos));
  }

render(){
    return( 
        <div></div>
        )
    }
}

export default DestroyDino;