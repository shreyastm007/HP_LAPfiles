import React, { useRef } from 'react'

const UserefComponent = () => {

    const inputElement=useRef()
    console.log(inputElement);

    const focusInput=()=>{
        inputElement.current.focus()
    }
  return (
    <div>
        <input type="text" />

        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default UserefComponent