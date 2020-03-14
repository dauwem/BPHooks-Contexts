import React, { Fragment } from 'react';
import { Router, Redirect } from '@reach/router';

// Import containers
import StateContainer from './StateContainer';
import EffectContainer from './EffectContainer';
import CustomContainer from './CustomContainer';
import CompositionContainer from './CompositionContainer';
import ContextContainer from './ContextContainer';

// Import components
import Header from '../components/Header';

function Containers() {
  return(
    <Fragment>
      <Header />
      <Router>
        <Redirect noThrow from="/" to="/state-hook" />
        <StateContainer path="/state-hook" />
        <EffectContainer path="/effect-hook" />
        <CustomContainer path="/custom-hook" />
        <CompositionContainer path="/composition" />
        <ContextContainer path="/context" />
      </Router>
    </Fragment>
  );
}

export default Containers;