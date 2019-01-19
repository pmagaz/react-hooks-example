import React, { useState, useEffect } from "react";

const UseEffect = () => {
  let [mouseEvent, setMouseEvent] = useState(0);
  
  useEffect(() => {
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

export default UseEffect;