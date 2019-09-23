import React, { Component, Fragment } from 'react';
import './App.css';

import colores from './samples/colores.json';
//import Colores from './components/Colores';
import ColorReq from './components/ColoresReq';
import Pagination from './components/Pagination'


class App extends Component{

  state = {
    colores: colores.data
  }

  render(){    
    return (
      <Fragment>
    <div className="container-fluid">
      <h2>Colores</h2>      
    </div>
    <div className="container">
      <ColorReq />
      <Pagination/>
    </div>
    </Fragment>
    )
  }
}


export default App;
