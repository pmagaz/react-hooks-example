import React, { useState, useMemo } from 'react';

const UseMemo = () => {
  const [text, setText] = useState('Hello!');

  const Child = ({ text }) => {
    console.log('rendered again!');
    return (
      <div>
        { text }
     </div>
     );
  }

   // Only se renderiza en cada cambio de text
   const child1 = useMemo(() => <Child text={ text } />, [text]);

   return (
     <div>
       <button onClick={() => setText('Hello!')}>Hello! </button>
       <button onClick={() => setText('Hola!')}>Hola!</button>
       { child1 }
     </div>
   )
}

export default UseMemo;