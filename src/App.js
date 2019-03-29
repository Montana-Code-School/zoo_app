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
    deleteId:''
  }


  componentDidMount() {
    fetch('http://localhost:3005')
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
      console.log(e.target.name);
      newState[e.target.name] = e.target.value;
    }
    this.setState(newState);
  }

  addAnimal = (e) => {
    e.preventDefault();
    const {animal, age, predator} = this.state;
    const customPath = `/?name=${animal}&age=${age}&predator=${predator}`
    fetch(`http://localhost:3005${customPath}`, {
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
          deleteId:''
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
    const {deleteId} = this.state;
    if (!deleteId) return;
    console.log(deleteId);
    const customPath = `/${deleteId}`
    fetch(`http://localhost:3005${customPath}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then((deletedCritter) => {
        const {animals} = this.state;
        const newAnimals = this.deleteID(animals, deletedCritter._id )
        this.setState({
          animals: newAnimals,
          deleteId: "",
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
          _id={this.state.deleteId}
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
