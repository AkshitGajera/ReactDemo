
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropertiesPra from './PropertiesPra'
import Firstchecktrue from './Firstchecktrue'
import Propsmethods from './Propsmethods'
import ViceVersa from './ViceVersa'
import Images_rendering from './Images_rendering'
import { useState } from 'react'
import RenderingCss from './RenderingCss'
import AlertMessage from './AlertMessage'
import Counter from './Counter'
import Display from '../../3.Props/3.Props/src/Display'
import PasswordInput from './PasswordInput'
import ShoppersAssistant from './ShoppersAssistant'
import ItemList from './ItemList'




let arr = ["mahi",1,"parth",2,"viraj",3,"Digvijay",4]
let obj = [{Name:"qref",age:21},
             {Name:"parth",age:16},
             {Name:"viraj",age:42},
             {Name:"Digvijay",age:49}]

let arrnum = [1,2,3,4,5,"mahi"]

let fruits = [{Name:"mango" , price:400},{Name:"Apple" , price:500}]
let vegetables = [{Name:"Tomato" , price:200},{Name:"potato", price:100}]

let img_render = [{imgs:"./src/assets/images/P1.jpg" , Name:"Product 1" , Price:"100"},{imgs:"./src/assets/images/P2.jpg" , Name:"Product 2" , Price:"200"},{imgs:"./src/assets/images/P3.jpg" , Name:"Product 3" , Price:"300"}]


let array1 = ["laptop","i-phone","LED"] 



// let sty = [{color:"red"},{color:"brown"},{color:"blue"}]




function App() {

//  Increase Decrease Resert 

  let [count,setCount] = useState(0)
  const Inc =()=>{
     setCount(count + 1)
  }
  const Dec =()=>{
    setCount(count - 1)
 }
 const Reset =()=>{
  setCount(count = 0)
}

// function with parameters

const FunWithParameters = (a,b) =>{
  document.write("sum :" , a+b);
  alert(a+b)

}

//onChange() onKeyDown()

let [changed,setChanged] = useState("Start")   
const ShowName = (event) =>{
  if(event.key === 'Enter'){
  setChanged(event.target.value);   // onKeyDown.input.value store in var = changed 
  //so if enter key is pressed then(if) input value store in var = changed then it {prints}
  }
}

// toggel

let [Show , setShowHide] = useState(true)
let FunShowHide =()=>{
  setShowHide(!Show)
}





  return (
    <>
    <div>

      {/* {arr.length>0 && <PropertiesPra arr1 = {arr}></PropertiesPra> }
      {obj.length>0  && <PropertiesPra obj1 = {obj}></PropertiesPra>} */}
        
        {/* <PropertiesPra arrs = {arr}></PropertiesPra>  */}        {/* dont use multiple components while rendering because if 2nd time call then all rewrite defined var */}
        <PropertiesPra objs = {obj}  arrs = {arr} ></PropertiesPra>    {/* define in var all datatypes which are defined*/}

      {arrnum.length>0 &&  <Firstchecktrue arrlth = {arrnum}></Firstchecktrue>}
      <Propsmethods             age = {21} mess={true} ></Propsmethods>
        
        
      <ViceVersa fru = {fruits}   veg = {vegetables}></ViceVersa>

      <Images_rendering  iren = {img_render}  ></Images_rendering>

      <h1>{count}</h1>
      <button className='btn btn-warning' onClick={Inc} >Increase</button>
      <button className='btn btn-info' onClick={Dec} >Decrease</button>
      <button className='btn btn-success' onClick={Reset} >Reset</button> 
      <button className='btn btn-danger' onClick={()=> FunWithParameters(10,20)}>Sum</button> 

      <input type="text" onKeyDown={ShowName}/>
      <h1>{changed}</h1>

      {/* it means if click on btn then fun run but var works at everyware like show hide on click btn */}
      <input type={Show === true ? "password" : "text"} />     {/* connect btn and input with var */}
      <button onClick={FunShowHide}> {Show === true ? "Show" : "Hide"} </button>
      <RenderingCss></RenderingCss>

      {/* Q4 */}
      <AlertMessage  showAlert = {false}></AlertMessage>

      {/* Q5 */}
      <Counter></Counter>

      {/* Q6 */}
      <Display></Display>

      {/* Q7 */}
      <PasswordInput></PasswordInput>
      {/* Q8 */}
      <ShoppersAssistant arr1 =  {array1}></ShoppersAssistant>
      {/* Q9 */}
      {array1.length === 0 ? <p>No items avalible</p> :  <ItemList arr2 =  {array1}></ItemList>}
      {/* Q10 */}

      




      </div>
    </>
  )

}

export default App
