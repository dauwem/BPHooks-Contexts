import React, { Fragment } from 'react';
import { Router, Redirect } from '@reach/router';

// Import containers
import StateContainer from './StateContainer';
import EffectContainer from './EffectContainer';
import CustomContainer from './CustomContainer';
import CompositionContainer from './CompositionContainer';
import ContextContainer from './ContextContainer';
import ContextHookContainer from './ContextHookContainer';
import ReducerContainer from './ReducerContainer';
import CallbackContainer from './CallbackContainer';
import MemoContainer from './MemoContainer';
import RefContainer from './RefContainer';
import ImperativeHandleContainer from './ImperativeHandleContainer';

// Import components
import Header from '../components/Header';

function Containers() {
  return(
    <Fragment>
      <Header />
      <Router style={{ margin: '10px' }}>
        <Redirect noThrow from="/" to="/state-hook" />
        <StateContainer path="/state-hook" />
        <EffectContainer path="/effect-hook" />
        <CustomContainer path="/custom-hook" />
        <CompositionContainer path="/composition" />
        <ContextContainer path="/context" />
        <ContextHookContainer path="/context-hook" />
        <ReducerContainer path="/reducer-hook" />
        <CallbackContainer path="/callback-hook" />
        <MemoContainer path="/memo-hook" />
        <RefContainer path="/ref-hook" />
        <ImperativeHandleContainer path="/imperative-handle-hook" />
      </Router>
    </Fragment>
  );
}

export default Containers;