import React, { useState, useEffect } from "react";

const UseEffectWithCleanUp = () => {
  let [mouseEvent, setMouseEvent] = useState(0);
  
  useEffect(() => {
    document.addEventListener("click", setMouseEvent, false);
    return () => {
      //será ejecutado cuando se ejecute unmount
      document.removeEventListener('click', setMouseEvent);
      console.log('CleanUp!')
    }
  },[mouseEvent.clientX]);

  return (
   <fieldset>
      <div>
        X: { mouseEvent.clientX } 
        Y: { mouseEvent.clientX } 
        </div>
    </fieldset>
  );
}

export default UseEffectWithCleanUp;