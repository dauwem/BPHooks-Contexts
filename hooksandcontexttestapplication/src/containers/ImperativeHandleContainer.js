import React from 'react';

// Components
import ImperativeInput from '../components/ImperativeInput';

function ImperativeHandleContainer() {
  const imperativeInputRef = React.createRef();

  return (
    <ImperativeInput ref={ imperativeInputRef }>Click me!</ImperativeInput>
  );
}

export default ImperativeHandleContainer;

