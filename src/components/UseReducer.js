import React, { useReducer } from 'react';

const initialState = { count: 0 }; 
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return initialState
    default:
      return state;
  }
}

const UseReducer = () => {
  //se define la variable count y su setter utilizando desestructuracion de Arrays
  const [state, dispatch] = useReducer(reducer, initialState);// initial state

  return (
    <div>
      Count: { state.count }
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
  </div>
  );
}

export default UseReducer;