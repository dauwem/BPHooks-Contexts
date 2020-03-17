import React from 'react';

function Button({ increment }) {
  console.log('Button re-rendered');

  return <button onClick={() => increment()}>Increase counter</button>
}

export default Button;