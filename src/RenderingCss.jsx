import React, { useState } from 'react'


function RenderingCss() {
   
  
    const colors = ['red','blue','green'];
    const co = ['black','pink','yellow']
    const [hovered,setHovered] = useState(true)
    const fun = ()=>{
        setHovered(!hovered)
    }

    return (
        <>
         <div className='div1' style={{backgroundColor: hovered ? "yellow" : "pink" }} onMouseEnter={fun}></div>


        {colors.map((color)=>(

            <div style={{backgroundColor:color,border:'1px solid black',height:'200px',width:'200px'}}></div>

        ))}

        {co.map((c)=>(
            <h1 style={{color:c}}>Mahi</h1>
        ))}
       
        </>
    )
}

export default RenderingCss
