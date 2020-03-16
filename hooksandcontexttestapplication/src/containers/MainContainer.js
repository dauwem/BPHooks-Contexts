import React from 'react';

// assets/css
import '../assets/css/MainContainer.scss';

// Import components
import Landscape from '../components/Landscape';
import StatusPerson from '../components/StatusPerson';

function MainContainer(props) {
  return (
    <div className="MainContainer__Container">
      {
        props.hook ? <StatusPerson /> : <Landscape />
      }
    </div>
  );
}

export default MainContainer;