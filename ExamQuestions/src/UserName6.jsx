import React from 'react'
import { useState } from 'react'
function UserName6() {
    const [input, setinput] = useState("nothing")
    let inputed = (event) => {
       if(event.key === "Enter"){
        setinput(event.target.value)
       }
    }
    return (
        <>
        <div>
            Name : <input type="text" onKeyDown={inputed}/>
            <p>Entered Name : {input}</p>
        </div>
        </>
    )
}

export default UserName6
