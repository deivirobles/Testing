import React, { Component } from 'react'

class Color extends Component{

  render() {
    return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <span className="card-title">{this.props.color.year}</span>
          <div className="card-text">
            <p>{this.props.color.name}</p>
            <p id="codColor">{this.props.color.color}</p>
          </div>
          <p className="text-right">{this.props.color.pantone_value}</p>
        </div>
      </div>
    </div>
    )
  }
}

export default Color
