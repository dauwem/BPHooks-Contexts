import React, { useState, useCallback } from 'react';

// Import components
//import Button from '../components/Button';

function CallbackContainer() {
  const [count, setCount] = useState(0);
  const [callbackCount, setCallbackCount] = useState(0);

  console.log('CallbackContainer');

  const incrementCallback = useCallback(() => {
    setCallbackCount(callbackCount + 1);
  }, [callbackCount]);
  
  const increment = () => {
    setCount(count + 1);
  };

  console.log(incrementCallback);

  const decrementCallback = useCallback(() => {
    console.log('Callback decrement fired!');
    setCallbackCount(callbackCount - 1);
  }, [callbackCount]);

  console.log(increment);
  
  const decrement = () => {
    console.log('Decrement fired!');
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Without callback</h2>
      <section>
        <p>{ count }</p>
        <button onClick={ increment }>+</button>
        <button onClick={ decrement }>-</button>
      </section>
      <h2>With callback</h2>
      <section>
        <p>{ count }</p>
        <button onClick={ incrementCallback }>+</button>
        <button onClick={ decrementCallback }>-</button>
      </section>
    </div>
  );
}

export default CallbackContainer;


