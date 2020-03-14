import React, { Fragment } from 'react';

// Import custom hook
import useSpeed from '../assets/js/hooks/useSpeed';

function Porsche() {
  let speed = useSpeed(0, 200);

  return (
    <Fragment>
      <p>Status of Porsche!</p>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: speed + "%" }} aria-valuenow={ speed } aria-valuemin="0" aria-valuemax="100">{ speed }%</div>
      </div>
    </Fragment>
  );
}

export default Porsche;