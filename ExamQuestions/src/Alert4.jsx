import React from 'react'

function Alert4(props) {
    return (
        <>
        <h1>
        {props.showAlert === true && alert("Something went wrong!!")}
        </h1>
        </>
    )
}

export default Alert4
