import React from 'react'

function PropertiesPra({arrs,objs}) {
    let {Name , age} =  objs
    return (
        <>
        <div>
        {objs.map((j)=>(   
            <div>
                
        { j.Name ?  <p>{j.Name} </p> : <p> <b> NO  Name data available</b> </p> }
        { j.age ?    <p>{j.age}</p> :  <p><b>No age data avalible</b></p> }

        <hr />
          
         
          </div>
        ))}

        {arrs.map((i)=>(
            <div>
            <p>{i}</p>
            </div>
        ))}

        

        
        
        </div>

        
    

        </>
    )
}

export default PropertiesPra
