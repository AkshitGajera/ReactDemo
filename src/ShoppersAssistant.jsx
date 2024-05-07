import React from 'react'

function ShoppersAssistant({arr1}) {
    return (
        <>
            {arr1.map((i)=>(
                <li> {i}  &nbsp; &nbsp; <button className='btn btn-info'>Buy</button> </li>
            ))}
        </>
    )
}

export default ShoppersAssistant
