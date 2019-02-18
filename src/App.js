import React, { Component } from 'react';
import './App.css';
import Intake from './Intake';
import Enclosure from './Enclosure';

class App extends Component {
  state = {
    animals: [
      {
        name: 'tiger', 
        predator: true,
        age: 7,
      },
      {
        name: 'horse', 
        predator: false,
        age: 10,
      },
      {
        name: 'echidna', 
        predator: true,
        age: 2,
      },
    ],
    animal: 'monkey',
    age: 22,
    predator: false,
  }

  intakeHandler = (e) => {
    const newAnimal = {...this.state}
    if (e.target.type === 'checkbox') {
      newAnimal[e.target.name] = e.target.checked
    } else {
      newAnimal[e.target.name] = e.target.value
    }
    this.setState(newAnimal) 
  }

  addAnimal = (e) => {
    e.preventDefault();
    const {animal, age, predator} = this.state;
    const newCritter = {name: animal, age, predator};
    const updatedAnimals = this.state.animals.slice();
    updatedAnimals.push(newCritter);
    this.setState({
      animals: updatedAnimals,
      animal: "",
      age: 0,
      predator: false,
    })
  }

  render() {
        
    return (
      <div className="App">
        <Intake 
          animal={this.state.animal}
          age={this.state.age}
          intakeHandler={this.intakeHandler}
          addAnimal={this.addAnimal}
          predator={this.state.predator}
        />
        {this.state.animals.map( (beasty) => <Enclosure animal={beasty} />)}
      </div>
    );
  }
}

export default App;
