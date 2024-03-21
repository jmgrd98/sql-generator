import React from 'react'
import MessageDisplay from './MessageDisplay';

interface UserMessage {
    role: string,
    content: string
}

interface MessagesDisplayProps {
    userMessages: UserMessage[]
}

const MessagesDisplay = ({ userMessages }: MessagesDisplayProps) => {
  return (
    <div className='overflow-y-scroll flex flex-col gap-2'>
      {userMessages?.map((userMessage: any, _index: number) => <MessageDisplay message={userMessage} key={_index}/>)}
    </div>
  )
}

export default MessagesDisplay
