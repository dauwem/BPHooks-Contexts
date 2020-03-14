import React, { Fragment } from 'react';
import { Router, Redirect } from '@reach/router';

// Import containers
import StateContainer from './StateContainer';
import EffectContainer from './EffectContainer';
import CustomContainer from './CustomContainer';
import CompositionContainer from './CompositionContainer';

// Import components
import Header from '../components/Header';

function Containers() {
  return(
    <Fragment>
      <Header />
      <Router>
        <Redirect noThrow from="/" to="/state" />
        <StateContainer path="/state" />
        <EffectContainer path="/effect" />
        <CustomContainer path="/custom" />
        <CompositionContainer path="/composition" />
      </Router>
    </Fragment>
  );
}

export default Containers;