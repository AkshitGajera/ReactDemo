import React from 'react'

function Number() {
    const number = parseInt(Math.random() * 100)
    const number1 = 5
    const number2 = 10
    const number3 = number1 + number2
    return (
        <div>
            <h1>{number}</h1>
            <h2>{number3}</h2>
        </div>
    )
}

export default Number
