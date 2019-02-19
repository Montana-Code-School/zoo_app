import React, { Component } from 'react';
import uuid from 'uuid';

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
        id: uuid(),
      },
      {
        name: 'horse', 
        predator: false,
        age: 10,
        id: uuid(),
      },
      {
        name: 'echidna', 
        predator: true,
        age: 2,
        id: uuid(),
      },
    ],
    animal: 'monkey',
    age: 22,
    predator: false,
  }

  intakeHandler = (e) => {
    const newAnimal = {...this.state};
    console.log(typeof e.target.value);
    if (e.target.type === 'checkbox') {
      newAnimal[e.target.name] = e.target.checked;
    } else if (e.target.type === 'number') {
      newAnimal[e.target.name] = parseInt(e.target.value, 10) || '';
    } else {
      newAnimal[e.target.name] = e.target.value;
    }
    this.setState(newAnimal); 
  }

  addAnimal = (e) => {
    e.preventDefault();
    const {animal, age, predator} = this.state;
    const newCritter = {name: animal, age, predator, id: uuid()};
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
        <div className="CorralWrapper">
          <p className="CorralHeader">Corral</p>
          <div className="Corral">
            {this.state.animals.map( (beasty) => 
              <Enclosure 
                key={beasty.id}   
                animal={beasty} 
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
