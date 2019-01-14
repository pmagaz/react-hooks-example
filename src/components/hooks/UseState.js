import React, { useState } from 'react';

const UseState = () => {
  
  const [count, setCount] = useState(0);

  return (
    <div>
      Count: { count }
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
  </div>
  );
}

export default UseState;