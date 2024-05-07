import './App.css'
import List1 from './List1';
import Message from './Message'
import Student from './student'

let Sport = ["GT", "RCB", "MI"];
let fruit = [
  { Name: "Apple", price: "100" },
  { Name: "Banana", price: "120" },
  { Name: "Pineapple", price: "130" },
  { Name: "Guava", price: "120" },
  { Name: "Coconut", price: "80" }
]

let Vegetable = [{ Name: "Cabbage", price: "100" },
{ Name: "Cauliflower", price: "120" },
{ Name: "Brocolli", price: "450" },
{ Name: "Mushroom", price: "120" },
{ Name: "Spinach", price: "80" }
]

function App() {

  return (
    <>
      <div className='container'>
        <Student Name="Akshit"></Student> 
       <Student Name=" Akshit"  isStudent={false}></Student>
        <Message Message={Sport}></Message>

        {/* <List1 Fruits={fruit} Vegetables={Vegetable}>  </List1> */}
      </div>
    </>
  )
}

export default App
