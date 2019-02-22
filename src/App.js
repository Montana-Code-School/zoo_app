import React, { Component } from 'react';
import styled from 'styled-components';

import Intake from './Intake';
import Corral from './Corral';

class App extends Component {

  state = {
    animals: [],
    animal: 'monkey',
    age: 22,
    predator: false,
    _id: '',
    AnimalDelete:''
  }


  componentDidMount() {
    fetch('http://localhost:3001')
      .then(response => response.json())
      .then((myJson) => {
        this.setState({animals: myJson});
      })
  }


  intakeHandler = (e) => {
    const newState = {...this.state};
    if (e.target.type === 'checkbox') {
      newState[e.target.name] = e.target.checked;
    } else if (e.target.type === 'number') {
      newState[e.target.name] = parseInt(e.target.value, 10) || '';
    } else {
      newState[e.target.name] = e.target.value;
    }
    this.setState(newState);
  }

  addAnimal = (e) => {
    e.preventDefault();
    const {animal, age, predator} = this.state;
    const customPath = `/?name=${animal}&age=${age}&predator=${predator}`
    fetch(`http://localhost:3001${customPath}`, {
      method: "POST",
    })
      .then(response => response.json())
      .then((newCritter) => {
        const updatedAnimals = this.state.animals.slice();
        updatedAnimals.push(newCritter);
        this.setState({
          animals: updatedAnimals,
          animal: "",
          age: 0,
          predator: false,
          _id: '',
          AnimalDelete:''
        })

      })
  }

  deleteID(arr, id){
    const crittersToKeep = arr.slice();
    for (let i = 0; i < crittersToKeep.length; i++) {
      if (crittersToKeep[i]._id === id){
        crittersToKeep.splice(i, 1);
      }
    }
    return crittersToKeep;
  }

  deleteAnimal = (e) => {
    e.preventDefault();
    const {AnimalDelete} = this.state;
    const customPath = `/${AnimalDelete}`
    fetch(`http://localhost:3001${customPath}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then((deletedCritter) => {
        const {animals} = this.state;
        const newAnimals = this.deleteID(animals, deletedCritter._id )
        this.setState({
          animals: newAnimals,
          AnimalDelete: "",
        })

      })
  }

  render() {

    return (
      <AppStyles>
        <Intake
          animal={this.state.animal}
          age={this.state.age}
          intakeHandler={this.intakeHandler}
          addAnimal={this.addAnimal}
          predator={this.state.predator}
          deleteAnimal={this.deleteAnimal}
          _id={this.state.AnimalDelete}
          animals={this.state.animals}
        />
        <Corral
          
          animals={this.state.animals}
        />
      </AppStyles>
    );
  }
}

const AppStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default App;
