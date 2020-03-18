import React from 'react';

function Button(props) {
  console.log(`Button re-rendered: ${ props.message }`);

  return <button onClick={ props.action }>{ props.message }</button>
}

export default Button;