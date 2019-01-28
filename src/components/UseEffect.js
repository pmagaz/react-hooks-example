import React, { useState, useEffect } from "react";

const UseEffectComponent = () => {
  //usamos useState para definir mouseEvent y su setter
  let [mouseEvent, setMouseEvent] = useState(0);
  
  useEffect(() => {
    //useEffect se ejecutara despues del render y en el establecemos el listener
    document.addEventListener("mousemove", setMouseEvent, false);
  });

  return (
   <fieldset>
      <div>
        X: { mouseEvent.clientX } 
        Y: { mouseEvent.clientX } 
        </div>
    </fieldset>
  );
}

export default UseEffectComponent;