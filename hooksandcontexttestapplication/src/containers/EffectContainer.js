import React, { Fragment, useEffect, useState} from 'react';

function EffectContainer() {
  const[fruit, setFruit] = useState('Apple');
  const[count, setCount] = useState(0); 

  // Replacement for componentDidMount and componentDidUpdate
  useEffect(() => {
    document.title = `The fruit for this moment is ${ fruit }!`;
  }, [fruit]);

  return (
    <Fragment>
      <section>
        <p>{ fruit }</p>
        <button onClick={() => setFruit('Orange')}>
          Change fruit to orange
        </button>
      </section>
      <section>
        <p>{ count }</p>
        <button onClick={() => setCount( count + 1 )}>
          Change the counter
        </button>
      </section>
    </Fragment>
  );
}

export default EffectContainer;



