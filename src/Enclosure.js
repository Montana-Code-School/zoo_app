import React, { Component } from 'react';
import "./Enclosure.css"

class Enclosure extends Component {
  render() {
    return (
      <div className="Enclosure">
        <h1>Hi, I'm the {this.props.animal.name} Enclosure!</h1>
        <h1> {this.props.animal.predator? `I am a predator`: `I am going to die`} </h1>

      </div>
      
    );
  }
}

export default Enclosure;
