import { useState } from 'react'
import MessagesDisplay from './components/MessagesDisplay'
import CodeDisplay from './components/CodeDisplay'

function App() {


  return (
    <div className='h-screen w-screen p-20'>
     <MessagesDisplay />
     <input className='w-full rounded p-2 my-5 border border-black/20' placeholder='Digite aqui' />
     <CodeDisplay />

     <div className='button-container'>
        <button>Get Query!</button>
        <button>Clear Chat</button>
     </div>
    </div>
  )
}

export default App
