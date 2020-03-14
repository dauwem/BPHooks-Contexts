import React from 'react';

// Import Contexts
import { MyContext } from '../contexts/MyProvider';

// assets/css
import '../assets/css/Landscape.scss';

function Landscape() {
  return(
    <MyContext.Consumer>
      {
        context => (
          <div onClick={context.changePeriod} className={ "Landscape__Container--" + context.state }>
            <div className="Landscape__Container__Circle"></div>
          </div>
        )
      }
    </MyContext.Consumer>
  );
}

export default Landscape;