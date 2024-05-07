import React from 'react'
import { useState } from 'react'
function Password() {
    const [pState, setButton] = useState(false)
    let btn = () => {
        setButton(!pState)
    }
    return (
        <>
            <p>Password:</p>
            <input type={pState ? "text" : "password"} />&nbsp;
            <button onClick={btn}>{pState ? "Hide" : "Show"}</button>
        </>
    )
}

export default Password
