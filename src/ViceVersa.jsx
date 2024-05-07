import React from 'react'

function ViceVersa({fru,veg}) {
    return (
        <>
            { 
            fru.length === 0 ? veg.map((v)=>(
                <li>{v.Name}  &nbsp; {v.price}</li>

            )) : fru.map((f)=>(
                <li>{f.Name}  &nbsp; {f.price}</li>
               
            )) 
            }


            {veg.map((v)=>(
                <li>{v.Name}  &nbsp; {v.price}</li>

            )) }

            
                         
        </>
    )
}

export default ViceVersa

