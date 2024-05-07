import React from 'react'


function Images_rendering({iren}) {
    let {imgs,Name,Price} = iren

    
    return (
        <>
        <div className='container'>
            <div className='row'>
         {iren.map((i)=>(

            <div className="col-4 px-10">
            <div className='innerdiv'>

                {i.imgs ? <img src={i.imgs} alt='loading'/> : <p>No Product avalible</p> }
                {i.Name ? <h2>{i.Name}</h2>: <p>No Product Listed</p> }
                {i.Price ?    <h3>{i.Price}</h3> : <p>No Price Listed</p> }

            </div>
            </div>
         ))} 
         </div>
         </div>

         <button className='btn btn-danger'></button>
         <button className='btn btn-success'></button>
         <button className='btn btn-warning'></button>
         <button className='btn btn-info'></button>
        </>
    )


    
}

export default Images_rendering
// npm i bootstrap@5.3.3
// import 'bootstrap/dist/css/bootstrap.min.css'