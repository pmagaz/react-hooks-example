
import React, { Component } from 'react';
import UseState from './components/hooks/UseState';
import UseEffect from './components/hooks/UseEffect';

class App extends Component {
  render() {
    return (
      <div>
        <legend>UseState</legend>
        <UseState/>
        <legend>UseEffect</legend>
        <UseEffect/>
      </div>
    )
  }
}

export default App;