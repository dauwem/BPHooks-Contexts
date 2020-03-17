import React, { useState, useCallback } from 'react';

// Import components
import Button from '../components/Button';

function CallbackContainer() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, [setCount]);

  return (
    <div>
      <p>{ count }</p>
      <Button increment={increment} />
    </div>
  );
}

export default CallbackContainer;