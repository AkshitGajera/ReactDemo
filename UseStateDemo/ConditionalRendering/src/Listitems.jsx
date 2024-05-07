import React from 'react'

function Listitems({ items, category }) {
    return (
        <>
            <h2>{category}</h2>
            {items.map((i) => (<li className='listItems'>{i}
            <button>Delete</button>
            </li>))}
        </>
    )
}

export default Listitems
