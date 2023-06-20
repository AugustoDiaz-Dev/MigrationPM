import React, {useState} from 'react'

const Component1 = () => {

  const [count, setCount] = useState(4);

  function decrementCount() {
    setCount(prevCount => prevCount - 1);
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  } 

  return (
    <>
    <h2>Component 1</h2>
      <button onClick={decrementCount}>-</button>
      <span> {count} </span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default Component1