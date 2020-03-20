import React, { useRef, useImperativeHandle } from 'react';

function ImperativeInput(props, ref) {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={ inputRef } placeholder={ props.children } />
}

export default React.forwardRef(ImperativeInput);

