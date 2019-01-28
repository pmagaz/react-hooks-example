import React, { useReducer } from 'react';

// definimos un valor inicial para el store
const initialState = { count: 0 }; 

//definimos un reducer que recibira el state y el action
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    case 'reset': return initialState
    default: return state;
  }
}

const UseReducerComponent = () => {
  //state es el valor del store y dispatch nos permite disparar acciones
  const [state, dispatch] = useReducer(reducer, initialState);// Valor inicial

  return (
    <div>
      Count: { state.count }
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
  </div>
  );
}

export default UseReducerComponent;