import React, { Fragment } from 'react';

// Import components
import Seat from '../components/Seat';
import Porsche from '../components/Porsche';

function CustomContainer() {

  return (
    <Fragment>
      <p>Let's take the challenge!</p>
      <Seat />
      <Porsche />
    </Fragment>
  );
}

export default CustomContainer;