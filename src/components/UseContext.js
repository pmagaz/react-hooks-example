import React, { useContext, useState } from 'react';

const UseContext = () => {
  //Create context devuelve { Provider, Consumer }
  const CountContext = React.createContext(15);
  const count = useContext(CountContext);

  return (
    <div>
    <CountContext.Provider value={ count }>
        { count }
    </CountContext.Provider>
</div>
  );
}

export default UseContext;