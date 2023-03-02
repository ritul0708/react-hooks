import React, { useMemo, useState } from 'react';

// We are rendering isEven function in count One then why the count Two is also slow ??


const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(prev => prev + 1)
  }

  const incrementTwo = () => {
    setCounterTwo(prev => prev + 1)
  }

  const isEven = useMemo(() => {
    let i = 0;
    while(i < 2000000000) i++          // for slowing things down
    return counterOne % 2 === 0
  }, [counterOne])

  return (
    <div>
      <button onClick={incrementOne}>Count One - {counterOne}</button>
      <span> {isEven ? 'Even' : "Odd"}</span>   
      {/* isEven() when not using useMemo because useMemo stores a value */}
      <br />
      <br />
      <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
    </div>
  )
}

export default Counter