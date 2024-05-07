import React from 'react'
import UserList from './UserList'
import './App.css'

function App() {
  let userDetails = [{ Name: "Jash", Email: "jash@gmail.com", Address: "Surat" },
  { Name: "Akshit", Email: "akshit@gmail.com", Address: "Surat" },
  { Name: "Jatin", Email: "jatin@gmail.com", Address: "Ahmedabad" }
  ]

  return (
    <>
      <UserList userDetails={userDetails}></UserList>
    </>
  )
}

export default App
