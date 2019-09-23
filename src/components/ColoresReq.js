import React, { Component } from 'react'
export default class ColoresReq extends Component {
 
  state = {
    colores: []
  }

  async componentDidMount(){
    const res = await fetch('https://reqres.in/api/colors')
    const respuesta = await res.json()
    this.setState({colores: respuesta.data})    
  }

  

  render() {
    return (
      <div className="row">
        {
          this.state.colores.map(color => {
            return(
            <div className="col-md-4" key={color.id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-title">{color.year}</span>
                  <div className="card-text">
                    <p>{color.name}</p>
                    <p id="codColor">{color.color}</p>
                  </div>
                  <p className="text-right">{color.pantone_value}</p>
                </div>
              </div>
              </div>
            )

          })
        }
        </div>
    )
  }
}
