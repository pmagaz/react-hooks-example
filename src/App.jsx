
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import UseContext from './components/UseContext';
import UseReducer from './components/UseReducer';
import UseCallback from './components/UseCallback';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';
import UseEffectApiRequest from './components/UseEffectApiRequest';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <legend>REACT HOOKS EXAMPLES</legend>
        <ul>
          <li>
            <Link to="/UseState">UseState</Link>
          </li>
          <li>
            <Link to="/UseEffect">UseEffect</Link>
          </li>
          <li>
            <Link to="/UseEffectApiRequest">UseEffectApiRequest</Link>
          </li>
          <li>
            <Link to="/UseContext">UseContext</Link>
          </li>
          <li>
            <Link to="/UseReducer">UseReducer</Link>
          </li>
          <li>
            <Link to="/UseCallback">UseCallback</Link>
          </li>
          <li>
            <Link to="/UseMemo">UseMemo</Link>
          </li>
          <li>
            <Link to="/UseRef">UseRef</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/UseState" component={ UseState } />
        <Route path="/UseEffect" component={ UseEffect } />
        <Route path="/UseEffectApiRequest" component={ UseEffectApiRequest } />
        <Route path="/UseContext" component={ UseContext } />
        <Route path="/UseReducer" component={ UseReducer } />
        <Route path="/UseCallback" component={ UseCallback } />
        <Route path="/UseMemo" component={ UseMemo } />
        <Route path="/UseRef" component={ UseRef } />
      </div>
    </Router>
     
    );
  }
}

export default App;