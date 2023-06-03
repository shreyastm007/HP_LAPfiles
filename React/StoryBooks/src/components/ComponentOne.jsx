import React, { useState } from 'react'
import withCounter from './withCounter'

const ComponentOne = ({count,increment,decrement}) => {
  return (
    <div><h1>{count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </div>
   
  )
}

export default withCounter(ComponentOne)