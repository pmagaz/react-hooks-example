import React, { useState, useMemo } from 'react';

const UseMemoComponent = () => {
  const [text, setText] = useState('Hello!');

  const ChildComponent = ({ text }) => {
    console.log('rendered again!');
    return (
      <div>
        { text }
     </div>
     );
  }

   // Solo se renderiza cuando el valor indicado en [] cambie
   const MemoizedComponent = useMemo(() => <ChildComponent text={ text } />, [text]);

   return (
     <div>
       <button onClick={() => setText('Hello!')}>Hello! </button>
       <button onClick={() => setText('Hola!')}>Hola!</button>
       { MemoizedComponent }
     </div>
   )
}

export default UseMemoComponent;