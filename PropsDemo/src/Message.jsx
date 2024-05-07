import React from 'react'

function Message(props) {
    let listofSport = props.Message;
    return (
        <>
            <ul>
               {listofSport.map((i)=>(
                    <li>{i}</li>
                ))}
            </ul>
        </>

    )
}

export default Message
