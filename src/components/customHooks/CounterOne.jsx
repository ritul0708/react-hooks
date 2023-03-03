import React from 'react';
import useCounter from './useCounter';

const CounterOne = () => {

  const [count, increment, decrement, reset] = useCounter(10, 5);
  
  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increment}>Increment Counter</button>
      <button onClick={decrement}>Decrement Counter</button>
      <button onClick={reset}>Reset Counter</button>
    </div>
  )
}

export default CounterOne