import React, { Component } from 'react';
import "./Intake.css"


class Intake extends Component {
  state = {
    animal: 'monkey',
    age: 22,
    predator: false,
  }

  intakeHandler = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(e.target.checked);
    const newAnimal = {...this.state}
    if (e.target.type === 'checkbox') {
      newAnimal[e.target.name] = e.target.checked
    } else {
      newAnimal[e.target.name] = e.target.value
    }
    this.setState(newAnimal) 
  }
  
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
            onChange={(e) => {this.intakeHandler(e)}}
          />
          <br />
          <label for="AnimalAge">Animal Age: </label>
          <input 
            type="number" 
            className="Age" 
            id="AnimalAge"             
            name="age"
            onChange={(e) => {this.intakeHandler(e)}}
          />
          <br />
          <label for="AnimalPredator">Animal is predator? </label>
          <input 
            type="checkbox" 
            className="Predator" 
            id="AnimalPredator"             
            name="predator"
            onChange={(e) => {this.intakeHandler(e)}}
          />
        </form>
        {this.state.animal} <br/>
        {this.state.age}<br/>
        {this.state.predator? 'I is a predator.': 'I is not a predator.'}
      </div>
    );
  }
}

export default Intake;
