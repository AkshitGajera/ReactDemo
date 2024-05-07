import React from 'react'

function Itemlist9(props) {
    let listt = props.item
    return (
        <>
        <div>
            <ol>
                {listt.map((it)=>(
                    <li>{it}</li>
                ))}
            </ol>
        </div>
        </>
    )
}

export default Itemlist9