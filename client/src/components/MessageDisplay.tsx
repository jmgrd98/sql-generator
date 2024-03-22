interface MessageDisplayProps {
    message: {
        role: string,
        content: string
    }
}

const MessageDisplay = ({ message }: MessageDisplayProps) => {
  return (
    <div className='w-full flex rounded gap-3 bg-black/10 p-3'>
      <p>•</p>
      <p>{message.content}</p>
    </div>
  )
}

export default MessageDisplay
