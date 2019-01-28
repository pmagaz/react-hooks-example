import React, { useRef, useState, useEffect } from 'react';

const UseRefComponent = () => {
  const [count, setCount] = useState(0);// 0 es el valor inicial

  // useRef se puede usar para alojar DOMS refs o cualquier tipo de referencia
  const prevCountRef = useRef();
  // Usamos useEffect para cambiar el valor de la referencia
  useEffect(() => {
    prevCountRef.current = count;
  });

  const prevCount = prevCountRef.current;

  return (
    <div>
      Count: { count } | Previous Count: { prevCount }
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
  </div>
  );
}

export default UseRefComponent;