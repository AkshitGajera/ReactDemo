import React from 'react'
import { useState } from 'react'

function PasswordInput() {
       
    let [pass,setPass] = useState(true)
    const  Fun = () =>{
        setPass(!pass)
    }

    return (
        <>
        <input type={pass ? "password" : "text" } />
        <button onClick={Fun}>{pass ? "Show" : "Hide"}</button>
        </>
    )
}

export default PasswordInput
