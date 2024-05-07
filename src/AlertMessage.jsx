import React from 'react'

function AlertMessage(props) {
    return (
        <>
        <h1>{props.showAlert === true  && alert("Somthing went wrong") }</h1>
        </>
    )
}

export default AlertMessage
