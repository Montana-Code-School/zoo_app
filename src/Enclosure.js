import React, { Component } from 'react';
import "./Enclosure.css"

class Enclosure extends Component {
  render() {
    return (
      <div className="Enclosure">
        <h2>Hi, I'm the {this.props.animal.name} and I'm {this.props.animal.age} years old.</h2>
        <h2> {this.props.animal.predator? `I am a predator`: `I am going to die`} </h2>
      </div>
    );
  }
}

export default Enclosure;
