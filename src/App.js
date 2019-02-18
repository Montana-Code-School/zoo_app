import React, { Component } from 'react';
import './App.css';

import Enclosure from './Enclosure';

class App extends Component {
  state = {
    animals: [{
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
  ]}

  render() {
    const enclosedAnimals = [];
    for (let i = 0; i < this.state.animals.length; i++){
      enclosedAnimals.push(<Enclosure animal={this.state.animals[i]} />)
    } 
    
    return (
      <div className="App">
        {this.state.animals.map( (x) => <Enclosure animal={x} />)}
      </div>
    );
  }
}

export default App;
