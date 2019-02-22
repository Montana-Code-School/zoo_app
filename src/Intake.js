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
        <form>
          <label htmlFor="DeleteAnimal">Animal Id to delete </label>
          <select 
            onChange={(e) => {this.props.intakeHandler(e)}}
            name="AnimalDelete"
          >
            {this.props.animals.map(animal => 
              <option 
                key={animal._id} 
                value={animal._id}>
                  {animal.name}
              </option>
            )}
          </select>
          <button name="delete" onClick={ (e) => {this.props.deleteAnimal(e)}}>
            Delete Animal
          </button>
        </form>
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
  deleteAnimal: PropTypes.func.isRequired,
  animals: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    predator: PropTypes.bool,
    _id: PropTypes.string,
  }))
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
