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
        
    return (
      <div className="App">
        {this.state.animals.map( (beasty) => <Enclosure animal={beasty} />)}
      </div>
    );
  }
}

export default App;
