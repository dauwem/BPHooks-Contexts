import React, { useCallback, useMemo, useState } from 'react';

function MemoContainer() {
  const [count, setCount] = useState(0);
  const testFunction = () => {
    console.log('Execute test function!');
    return 'This is a test function.';
  };

  const callbackFunction = useCallback(() => {
    console.log('Execute callback function!');
    testFunction();
  }, []);
  const memoFunction = useMemo(() => {
    console.log('Execute memo function!');
    return testFunction();
  }, []);

  console.log('useCallback: ', callbackFunction);
  console.log('useMemo: ', memoFunction);

  return (
    <div>
      <p>Please take a look at the console for the example.</p>
      <p>{ count }</p>
      <button onClick={ () => setCount(count + 1) }>Increase</button>
      <button onClick={ callbackFunction }>Callback</button>
    </div>
  );
}

export default MemoContainer;


