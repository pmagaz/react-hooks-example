
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import UseReducer from './components/UseReducer';
import UseMemo from './components/UseMemo';
import UseEffectWithCleanUp from './components/UseEffectWithCleanUp';
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
            <Link to="/UseEffectWithCleanUp">UseEffectWithCleanUp</Link>
          </li>
          <li>
            <Link to="/UseEffectApiRequest">UseEffectApiRequest</Link>
          </li>
          <li>
            <Link to="/UseReducer">UseReducer</Link>
          </li>
          <li>
            <Link to="/UseMemo">UseMemo</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/UseState" component={ UseState } />
        <Route path="/UseEffect" component={UseEffect} />
        <Route path="/UseEffectWithCleanUp" component={ UseEffectWithCleanUp } />
        <Route path="/UseEffectApiRequest" component={ UseEffectApiRequest } />
        <Route path="/UseReducer" component={ UseReducer } />
        <Route path="/UseMemo" component={ UseMemo } />
      </div>
    </Router>
     
    );
  }
}

export default App;