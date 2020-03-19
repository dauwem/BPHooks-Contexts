import React, { useRef } from 'react';

function RefContainer() {
  const fruit = useRef('Apple');

  return (
    <div>
      <p>{ fruit.current }</p>
      <button onClick={ () => fruit.current = 'Orange' }>Change fruit</button>
    </div>
  );
}

export default RefContainer;