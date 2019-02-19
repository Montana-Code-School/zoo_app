import React, { Component } from 'react';

import './Corral.css';
import Enclosure from './Enclosure';

class Corral extends Component {
  render() {
    return (
      <div className="CorralWrapper">
        <p className="CorralHeader">Corral</p>
        <div className="Corral">
          {this.props.animals.map( (beasty) => 
            <Enclosure 
              key={beasty.id}   
              animal={beasty} 
            />
          )}
        </div>
      </div>
    );
  }
}

export default Corral;
