import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Enclosure from './Enclosure';

function corral({animals}) {
  return (
    <CorralWrapper>
      <CorralHeader>Corral</CorralHeader>
      <CorralStyles>
        {animals.map( (beasty) => 
          <Enclosure 
            key={beasty._id}   
            animal={beasty} 
          />
        )}
      </CorralStyles>
    </CorralWrapper>
  );
};

corral.propTypes = {
  animals: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    predator: PropTypes.bool
  }))
};

const CorralWrapper = styled.div`
  flex: 4;
  text-align: center;
`

const CorralHeader = styled.p`
  font-size: 1.5rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`
const CorralStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2px solid skyblue;
  justify-content: space-evenly;
`

export default corral;
