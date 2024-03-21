import { useState } from 'react'
import './App.css'
import MessagesDisplay from './components/MessagesDisplay'
import CodeDisplay from './components/CodeDisplay'

function App() {


  return (
    <>
     <MessagesDisplay />
     <input  />
     <CodeDisplay />

     <div className='button-container'>
        <button>Get Query!</button>
        <button>Clear Chat</button>
     </div>
    </>
  )
}

export default App
