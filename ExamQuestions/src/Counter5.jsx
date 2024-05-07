import React from 'react'
import { useState } from 'react'

function Counter5() {
    const [count , setCount] = useState(0);
    let increment = () => {
        setCount(count+1)
    }
    let reset = () => {
        setCount(0)
    }
    let decrement = () => {
        setCount(count-1)
    }
    return (
        <>
        <div>
            <p>Count : {count}</p>
            <button onClick={increment} className='inc'>Increment</button>
            <button onClick={reset} className='res'>Reset</button>
            <button onClick={decrement} className='dec'>Decrement</button>
        </div>
        </>
    )
}

export default Counter5
