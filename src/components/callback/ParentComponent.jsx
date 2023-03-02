import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

// when clicking on increase age/salary button all components renders, how to prevent this???
// React.memo() ----- wrapping our all component with React.memo()
// But this also doesn't slove the problem at all 
// while clicking on increase age button the concole is like this
// rendering Age
// rendering button -  Increase Age
// rendering button -  Increase Salary ---- why this ????????? 
// because a new increaseSalary function is created each time the parent component re-renders
// and here we are passing function as a prop every time parent component renders increaseSalary function renders and props is changed. so React.memo() don't prevent this from re-rendering

// How to fix this ??? ------------------ useCallback()

const ParentComponent = () => {
  const [age, setAge] = useState(22);
  const [salary, setSalary] = useState(22000);

  const increaseAge = useCallback(() => {
    setAge(prev => prev + 1)
  }, [age])

  const increaseSalary = useCallback(() => {
    setSalary(prev => prev + 3000)
  }, [salary])


  return (
    <div>
      <Title />
      <Count text='Age' count={age} />
      <Button handleClick={increaseAge}>Increase Age</Button>
      <Count text='Salary' count={salary} />
      <Button handleClick={increaseSalary}>Increase Salary</Button>
    </div>
  )
}

export default ParentComponent