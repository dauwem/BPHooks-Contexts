import React from 'react';

// Import components
import Card from '../components/Card';

// assets/img
import DummyUser from '../assets/img/DummyUser.png';

function CompositionContainer() {
  return (
    <Card role='Gebruiker'>
      <img width="98" src={ DummyUser } alt="Foto gebruiker" />
      <p>Harold</p>
    </Card>
  );
}

export default CompositionContainer;

