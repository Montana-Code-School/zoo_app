import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function enclosure({animal}) {
  return (
    <EnclosureStyles {...animal}>
      <h2>Hi, I'm the {animal.name} and I'm {animal.age} years old.</h2>
      <h2> {animal.predator? `I am a predator`: `I am not a predator`} </h2>
    </EnclosureStyles>
  );
}

enclosure.propTypes = {
  animal: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    predator: PropTypes.bool
  })
}

const EnclosureStyles = styled.div`
  background: ${props => props.predator ? 'darkred' : 'green'};
  width: 25%;
  height: 44vh;
  margin: 10px;
  text-align: center;
  border: 2px dashed black;
`

export default enclosure;
