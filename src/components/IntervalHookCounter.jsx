import React, { useEffect, useState } from 'react';

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    // setCount(count + 1 )     // this creates a problem, working only single time
    setCount(prev => prev + 1)   // use this, or count in dependency array
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return (() => {
      clearInterval(interval);
    })
  }, [])         // not to leave empty every single time or you know that perticular code only run once

  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter