import React, { useState } from 'react'
import images from './assets/images.jpeg'
import images2 from './assets/images2.jpeg'
import images3 from './assets/images3.jpeg'
import ProductGrid from './ProductGrid'
import './App.css'
import Usercard from './Usercard'


function App() {

  // let [count, setCount] = useState(10)
  // const handleButton = () => {
  //   setCount(count + 1)
  // }
  // let [isOn, setIsOn] = useState(10)
  // const onoff = () => {
  //   setIsOn(!isOn)
  // }

  const products = [
    { image: images, name: "Product1", price: "Price: 100$" },
    { image: images2, name: "Product2", price: "Price: 200$" },
    { image: images3, name: "Product3", price: "Price: 300$" },
  ];

  const User_info = {
    name : "Akshit", email:"axitgajera0606@gmail.com", address:"Surat"
  }
  return (
    <>
      {/* <button onClick={handleButton}>Click</button>
      <button onClick={onoff}>{isOn ? "ON" : "OFF"}</button>
      <p>New Count :{count}</p> */}
      <div className='container'>
        {/* <ProductGrid product={products}></ProductGrid> */}
        <Usercard user={User_info}></Usercard>
      </div>
    </>
  );
}

export default App
