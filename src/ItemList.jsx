import React from 'react'

function ItemList({arr2}) {
    return (
        <>
        {arr2.map((a)=>(
            <li>{a}</li>
        ))}
        </>
    )
}

export default ItemList
