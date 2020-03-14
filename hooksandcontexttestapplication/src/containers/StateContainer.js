import React, { Fragment, useState } from 'react';

function StateContainer() {
  const [fruit, setFruit] = useState('Apple');

  return (
    <Fragment>
      <p>{ fruit }</p>
      <button onClick={() => setFruit('Orange')}>
        Change fruit to orange
      </button>
    </Fragment>
  );
}

export default StateContainer;



