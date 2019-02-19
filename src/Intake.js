import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Intake extends Component {
  render() {
    return (
      <IntakeStyles>
        <form className="IntakeForm">
          <label htmlFor="AnimalName">Animal Type: </label>
          <input 
            type="text" 
            className="Critter" 
            id="AnimalName" 
            name="animal"
            value={this.props.animal}
            onChange={(e) => {this.props.intakeHandler(e)}}
          />
          <br />
          <label htmlFor="AnimalAge">Animal Age: </label>
          <input 
            type="number" 
            className="Age" 
            id="AnimalAge"             
            name="age"
            value={this.props.age}
            onChange={(e) => {this.props.intakeHandler(e)}}
          />
          <br />
          <label htmlFor="AnimalPredator">Animal is predator? </label>
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
      </IntakeStyles>
    );
  }
}

Intake.propTypes ={
  animal: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  intakeHandler: PropTypes.func.isRequired,
  addAnimal: PropTypes.func.isRequired,
  predator: PropTypes.bool.isRequired,
}

const IntakeStyles = styled.div`
  background-color: aquamarine;
  width: 22%;
  height: 22vh;
  margin: 10px;
  text-align: center;
  padding: 10px 10px;
  flex: 1;
`

export default Intake;
