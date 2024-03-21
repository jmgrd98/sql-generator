import React from 'react'
import MessageDisplay from './MessageDisplay'

const MessagesDisplay = () => {
  return (
    <div className='overflow-y-scroll flex flex-col gap-2'>
      <MessageDisplay/>
      <MessageDisplay/>
      <MessageDisplay/>
    </div>
  )
}

export default MessagesDisplay
