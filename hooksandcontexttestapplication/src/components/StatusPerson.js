import React, { useContext } from 'react';

// Context
import { MyContext } from '../contexts/MyProvider';

// assets/img
import Awake from '../assets/img/Awake.jpg';
import Sleeping from '../assets/img/Sleep.jpg';
import Doubt from '../assets/img/Doubt.jpg';

// assets/css
import '../assets/css/StatusPerson.scss';

function StatusPerson() {
  const context = useContext(MyContext);

  let image;
  if (context.state === 'Day') {
    image = <img src={ Awake } alt="Awake" />
  }
  else if (context.state === 'Night') {
    image = <img src={ Sleeping } alt="Sleeping" />
  }
  else {
    image = <img src={ Doubt } alt="Doubt" />
  } 
  return (
    <div onClick={context.changePeriod} className="StatusPerson__Container">
      { image }
    </div>
  );
}

export default StatusPerson;


