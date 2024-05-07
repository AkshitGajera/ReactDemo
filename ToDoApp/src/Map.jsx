import React from 'react'

function Mapdemo() {
    let arr=[1,2,3,4,5]
    // let sports=["crecket","Basketball","Carrom","FootBall"]
    let sportslist = [{name:"Virat",age:30},{name:"K L rahul",age:28},{name:"Rahul",age:18}] // arry of object
    // if(sportlist.length === 0) return <h1>NO Sportperson listed</h1> 

    return <>
    
    {/* <ul style={{color:"red", fontFamily:"fantasy", fontSize:"20px"}}>

        {arr.map((i)=>(
            <li>{i} - {i*2}</li>
        ))}
    </ul> */}

        <h1>Welcome to Sport World</h1>
        {sportslist.length === 0 ? <h1>No sport person listed</h1> : null}
    {sportslist.map((sports)=>(
    <li style={{color:"darkblue", fontSize:"20px"}}>
        {sports.name} ----- &nbsp;&nbsp;
        {sports.age}
        </li>))}

    </>
}

export default Mapdemo
