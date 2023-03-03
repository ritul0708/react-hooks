import React, { useEffect, useState } from 'react'

const EffectCounterOne = () => {
  const [count, setCount] = useState(0);

  // this runs after every renders of the component
  useEffect(() => {
    document.title = `You Clicked ${count} Times`;
  })

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} Times</button>
    </div>
  )
}

export default EffectCounterOne