import React from 'react';

// assets/css
import '../assets/css/MainContainer.scss';

// Import components
import Landscape from '../components/Landscape';

function MainContainer() {
  return (
    <div className="MainContainer__Container">
      <Landscape />
    </div>
  );
}

export default MainContainer;