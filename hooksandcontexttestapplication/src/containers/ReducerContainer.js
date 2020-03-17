import React, { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'heavier' && state.weight !== 10) {
    return { weight: state.weight + 1 };
  }
  else if (action.type === 'reduce' && state.weight !== 0) {
    return { weight: state.weight - 1 };
  }
  return state;
}

function ReducerContainer() {
  const [state, dispatch] = useReducer(reducer, { weight: 1 });
  
  return (
    <div>
      <p>How much kilo can you carry?</p>
      <p>{ state.weight } lbs</p>
      <button onClick={() => dispatch({ type: 'heavier' })}>Heavier!</button>
      <button onClick={() => dispatch({ type: 'reduce' })}>Please reduce...</button>
    </div>
  );
}

export default ReducerContainer;


