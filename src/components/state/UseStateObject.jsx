import React, { useState } from 'react'

const UseStateObject = () => {
  const [name, setName] = useState({firstName: '', lastName: ''});

  {/* The code is breaking but why ???
          ---- because useState does not automatically merge and update the object
          we have to do this manually
          but how ???
          by using spread operator ----- */}

  return (
    <div>
      <form>
        <input 
          type="text" 
          value={name.firstName} 
          // onChange={e => setName({firstName: e.target.value})}
          onChange={e => setName({...name, firstName: e.target.value})} 
        />
        <input 
          type="text" 
          value={name.lastName} 
          // onChange={e => setName({lastName: e.target.value})}
          onChange={e => setName({...name, lastName: e.target.value})}
        />
      </form>
      <h2>Your First Name is: {name.firstName}</h2>
      <h2>Your Last Name is: {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
      <h1>Your Full Name is: {`${name.firstName} ${name.lastName}`}</h1>

    </div>
  )
}

export default UseStateObject