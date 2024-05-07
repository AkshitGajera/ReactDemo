import React, { useState } from 'react'

function Counter() {

    let [count , setCount] = useState(0)
    const Inc = ()=>{
        setCount(count + 1);
    }
    const Dec = ()=>{
        setCount(count - 1);
    }
    const Reset = ()=>{
        setCount(0)
    }

    return (
        <>

            <h1>{count}</h1>
            <button className='btn1' onClick={Inc}>Inc</button>
            <button className='btn2' onClick={Dec}>Dec</button>
            <button className='btn3' onClick={Reset}>Reset</button>

        </>
    )
}

export default Counter
