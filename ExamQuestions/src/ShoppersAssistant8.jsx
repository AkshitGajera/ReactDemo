import React from 'react'

function ShoppersAssistant8(props) {
    return (
        <>
        <div>
            <ol>
                {props.list.map((item)=>(
                    <li>
                        {item}
                        <button style={{background:"red", margin:"10px"}}>Buy</button>
                    </li>
                ))}
            </ol>
        </div>
        </>
    )
}

export default ShoppersAssistant8
