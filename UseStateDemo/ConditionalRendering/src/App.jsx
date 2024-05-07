import React from 'react'
import Listitems from './Listitems';
import './App.css'

function App() {
  let ElectronicsItem = ["Laptop", "SmartTv", "HeadPhone", "Digitalwatch"];
  let StationaryItem = ["Pen", "Pencil", "Eraser"];

  return (
    <>
      {ElectronicsItem.length > 0 ? (
        <Listitems items={ElectronicsItem} category="Electronics"></Listitems>) : null}

      {StationaryItem.length > 0 ? (
        <Listitems items={StationaryItem} category="Stationary"></Listitems>) : null}


    </>
  )
}

export default App
