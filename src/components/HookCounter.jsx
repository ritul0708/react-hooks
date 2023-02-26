import React, { useState } from 'react'

const HookCounter = () => {
  // count is current value of state property
  // setCount is a method that is capable of updating that state property

  // 0 is an agument passed inside useState hook or act as function
  // and this is initial value of of the state property
  const [count, setCount] = useState(0);
  // here we are using destructuring to get count, setCount sepratly

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      {/* but this is not the best way to update your state
          come on this part later */}
    </div>
  )
}

export default HookCounter