import React from 'react'

const CodeDisplay = () => {
  return (
    <div className='bg-black w-full h-[300px] rounded-md'>
      <div className='flex items-center gap-3 bg-gray-800 p-3 rounded-md'>
        <div className='rounded-full bg-green-500 w-5 h-5'></div>
        <div className='rounded-full bg-yellow-500 w-5 h-5'></div>
        <div className='rounded-full bg-red-500 w-5 h-5'></div>
      </div>
    </div>
  )
}

export default CodeDisplay
