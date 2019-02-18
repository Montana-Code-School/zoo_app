import React, { Component } from 'react';
import './App.css';

import Enclosure from './Enclosure';

class App extends Component {
  state = {
    animal: 'tiger'
  }
  render() {
    return (
      <div className="App">
        <Enclosure animal={this.state.animal} predator={true} />
        <Enclosure animal={'horse'} predator={false} />
        <Enclosure animal={'echidna'} predator={true}/>
      </div>
    );
  }
}

export default App;
