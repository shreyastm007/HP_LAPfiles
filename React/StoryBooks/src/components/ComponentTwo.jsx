import React, { useState } from 'react'
import withCounter from './withCounter'

const ComponentTwo = ({count,increment,decrement}) => {
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default withCounter(ComponentTwo)