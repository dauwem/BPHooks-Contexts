import React from 'react';

function PureInput(props) {
  return <input placeholder={ props.children } />
}

export default PureInput;