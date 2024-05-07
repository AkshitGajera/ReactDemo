import React from 'react'
import { useState } from 'react'

function Password7() {
    const [btn , setbtn] = useState(true)
    let but = () =>{
        setbtn(!btn)
    }
    return (

        <>
        <div>
            Password : <input type={btn === true ? "text" : "password"} />
            <button onClick={but}>{btn === true ? "hide" : "show"}</button>
        </div>
        </>
    )
}

export default Password7
