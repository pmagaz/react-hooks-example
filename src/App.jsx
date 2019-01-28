
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import UseStateComponent from './components/UseState';
import UseEffectComponent from './components/UseEffect';
import UseContextComponent from './components/UseContext';
import UseReducerComponent from './components/UseReducer';
import UseCallbackComponent from './components/UseCallback';
import UseMemoComponent from './components/UseMemo';
import UseRefComponent from './components/UseRef';
import UseEffectApiRequestComponent from './components/UseEffectApiRequest';

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

        <Route exact path="/UseState" component={ UseStateComponent } />
        <Route path="/UseEffect" component={ UseEffectComponent } />
        <Route path="/UseEffectApiRequest" component={ UseEffectApiRequestComponent } />
        <Route path="/UseContext" component={ UseContextComponent } />
        <Route path="/UseReducer" component={ UseReducerComponent } />
        <Route path="/UseCallback" component={ UseCallbackComponent } />
        <Route path="/UseMemo" component={ UseMemoComponent } />
        <Route path="/UseRef" component={ UseRefComponent } />
      </div>
    </Router>
     
    );
  }
}

export default App;