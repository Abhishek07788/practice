import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    const handleClick2 = useCallback(() => {
        setCount2(count2 + 1);
    },[])

  return (
    <div>
        <Child count2={count2} handleClick2={handleClick2}/>
        <button onClick={handleClick}>Count: {count}</button>

    </div>
  )
}

export default Parent