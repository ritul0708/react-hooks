import React, { useReducer } from 'react';

// why we are making this complex by using object, what;s the benifit of this ??
// --- First Scenerio --- //
// Let's add two more button that increase by 5 
// but we are not going to hard code value or 
// we are not going to increase our switch cases for this 

// --- Second Scenerio --- //
// what if we have two different counters


// Objects are very useful while managing multiple states variables
// we can track them one by one
// It is much suitable when dealing with global state

const initialState = {
  firstCounter: 0,
  secondCounter: 10
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      // return {firstCounter: state.firstCounter + 1}
      return { ...state, firstCounter: state.firstCounter + action.value}
    case 'decrement':
      // return {firstCounter: state.firstCounter - 1}
      return { ...state, firstCounter: state.firstCounter - action.value}

    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value}
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value}
    case 'reset':
      return initialState
    default:
      return state
  }
}

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>First Counter: {count.firstCounter}</div>
      <div>Second Counter: {count.secondCounter}</div>
      <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>

      {/* for scenerio 1 */}
      <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
      <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>

      {/* for scenerio 2 */}
      <div>
        <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment Counter 2</button>
        <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement Counter 2</button>
      </div>

      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default CounterOne