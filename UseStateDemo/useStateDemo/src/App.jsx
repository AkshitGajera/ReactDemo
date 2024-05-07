import { useState } from 'react'
import Input from './input'
import './App.css'
import Password from './Password'
function App() {
  const [count, setCount] = useState(0)

  const Increment = () => {
    setCount(count + 1)
  }
  const Reset = () => {
    setCount(0)

  }
  const Decrement = () => {
    setCount(count - 1)

  }


  return (
    <>
      <p className='count'>Count : {count}</p>
      <button className="btn1" onClick={Increment}>Increment</button>
      <button className="btn2" onClick={Reset}>Reset</button>
      <button className="btn3" onClick={Decrement}>Decrement</button>
      <br /><br /><hr /><br /><br />
      <Input></Input><br /><br />
      <hr /><br /><br />
      <Password></Password>
    </>
  )
}

export default App
