import React, { Component } from 'react'

import Color from './Color';

class Colores extends Component{
  render(){
    return (
      this.props.colores.map(color => <Color color={color} key={color.id}/>)
    )
  }
}

export default Colores;
