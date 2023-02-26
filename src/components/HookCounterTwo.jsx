import React, { useState } from 'react';

const INITIAL_COUNT = 0;

const HookCounterTwo = () => {
  const [count, setCount] = useState(INITIAL_COUNT);

  // This function only increament the state by 1 
  // instead of updating it by 5, why????
  const incrementFive = () => {
    for (let i=0; i<5; i++) {
      setCount(count + 1)
    }
  }

  // rather than use this method of updating state
  const incrementTen = () => {
    for (let i=0; i<10; i++) {
      setCount(prevState => prevState + 1)
    }
  } 

  return (
    <div>
      Count {count}
      <hr />
      Wrong one to Use--------     
      <button onClick={() => setCount(INITIAL_COUNT)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      {/* The way we are updating our state value it is unsafe
          Take a look at incrementFive five function */}
      <button onClick={incrementFive}>Increment 5</button>
      <hr />
      <hr />
      Right One to Use--------     
      <button onClick={() => setCount(INITIAL_COUNT)}>Reset</button>
      <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
      <button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
      <button onClick={incrementTen}>Increment 10</button>
    </div>
  )
}

export default HookCounterTwo