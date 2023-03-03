import React, { useState, useEffect } from 'react';

const EffectMouseMove = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    console.log('Mouse position');
    setX(e.clientX)
    setY(e.clientY)
  }

  // we want to run Effect Hook only one time 
  // then we have to pass empty dependency array [] as second argument
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);


    // ------ related to cleanup ------- //
    return (() => {
      console.log("cleanup called");
      window.removeEventListener('mousemove', logMousePosition);
    })

    // ------ related to cleanup ------- //


  }, [])       //passing empty dependency array

  return (
    <div>
      X Cordinates - {x} Y Cordinates - {y}
    </div>
  )
}

export default EffectMouseMove