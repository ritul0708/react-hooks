import React, { useReducer } from 'react';

// While dealing with multiple state variable with same state transition, then
// It is a good idea to use multiple useReducers making use of same reducer function
// This will avoid the complexity of merging the state
// if ti were to be an object and also prevents us from duplicating the code in reducer function
// like we have already seen in counter two

const initialState = 0;

const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1 
    case 'reset':
      return initialState
    default:
      return state
  }
}

const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>

      <div>CountTwo: {countTwo}</div>
      <button onClick={() => dispatchTwo('increment')}>Increment</button>
      <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
      <button onClick={() => dispatchTwo('reset')}>Reset</button>
    </div>
  )
}

export default CounterThree