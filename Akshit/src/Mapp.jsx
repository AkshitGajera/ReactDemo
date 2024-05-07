import React from 'react'

function Mapp() {
    let arr=[10,20,30];
    return (
        <>
        <ul>
            {arr.map((i)=>(
                <li>{i}</li>
            ))}
        </ul>
        </>
    )
}

export default Mapp
