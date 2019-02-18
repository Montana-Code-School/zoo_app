import React, { Component } from 'react';
import "./Intake.css"


class Intake extends Component {
  
  render() {
    return (
      <div className="Intake">
        <form className="IntakeForm">
          <label for="AnimalName">Animal Type: </label>
          <input 
            type="text" 
            className="Critter" 
            id="AnimalName" 
            name="animal"
            value={this.props.animal}
            onChange={(e) => {this.props.intakeHandler(e)}}
          />
          <br />
          <label for="AnimalAge">Animal Age: </label>
          <input 
            type="number" 
            className="Age" 
            id="AnimalAge"             
            name="age"
            value={this.props.age}
            onChange={(e) => {this.props.intakeHandler(e)}}
          />
          <br />
          <label for="AnimalPredator">Animal is predator? </label>
          <input 
            type="checkbox" 
            className="Predator" 
            id="AnimalPredator"             
            name="predator"
            checked={this.props.predator}
            onChange={(e) => {this.props.intakeHandler(e)}}
          />
          <button name="contribute" onClick={ (e) => {this.props.addAnimal(e)}}>
            Add Animal to the Zoo
          </button>
        </form>
        {this.props.animal} <br/>
        {this.props.age}<br/>
        {this.props.predator? 'I is a predator.': 'I is not a predator.'}
      </div>
    );
  }
}

export default Intake;
