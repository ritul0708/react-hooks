import React, { useEffect, useRef, useState } from 'react';

// useRef can be used to create a generic container whcih can hold a mutable value similar to instance properties in a class component.
// This generic container does not cause re-renders when the data it stores changes
// At the same time it also remembers the stored data even after other state variables caused a re-render of this component

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prev => prev + 1)
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    };
  }, [])

  return (
    <div>
      Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
    </div>
  )
}

export default Timer