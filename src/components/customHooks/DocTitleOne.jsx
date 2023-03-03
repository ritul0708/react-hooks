import React, { useEffect, useState } from 'react'
import useDocTitle from './useDocTitle';

const DocTitleOne = () => {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   document.title = `Count ${count}`
  // }, [count])

  useDocTitle(count);

  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleOne