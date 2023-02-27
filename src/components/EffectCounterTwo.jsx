import React, {useEffect, useState} from 'react'

const EffectCounterTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // As we know useEffect runs after every renders, 
  // so if we want to coditionally render useEffect then we pass a second parameter
  // This parameter is an array. 
  // In this we have to specify either props or state
  // For only the change in specified props or state useEffect renders

  useEffect(() => {
    console.log("useEffect ---- updating document title");
    document.title = `You Clicked ${count} Times`;
  }, [count])   //here only when count changes

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(prev => prev + 1)}>Click {count} Times</button>
    </div>
  )
}

export default EffectCounterTwo