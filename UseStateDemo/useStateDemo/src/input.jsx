import React from 'react'
import { useState } from 'react'


function Input() {
    let [Name, setName] = useState("Guest");

    const handleChange = (event) => {
        if (event.key === "Enter") {
            console.log(event);
            setName(event.target.value);
        }
    }
    return (
        <>
            <label>Name:</label>
            <input type="text" onKeyDown={handleChange} />
            <p>THe Name Entered:{Name}</p>
        </>
    )
}

export default Input
