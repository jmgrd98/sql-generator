import { useState } from 'react'
import MessagesDisplay from './components/MessagesDisplay'
import CodeDisplay from './components/CodeDisplay'

interface ChatData {
  role: string,
  content: string
}

function App() {

  const [value, setValue] = useState<string>('');
  const [chat, setChat] = useState<ChatData[]>([]);

  const getQuery = async () => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: value
        }),
      }
      const response = await fetch('http://localhost:5000/completions', options);
      const data = await response.json();
      const userMessage = {
        role: "user",
        content: value
      }
      setChat((oldChat: any) => [...oldChat, data, userMessage]);
      setValue("");
    } catch (error) {
      console.error(error);
    }
  };

  const clearChat = () => {
    setValue('');
    setChat([]);
  }

  const filteredUserMessages = chat.filter(message => message.role === 'user');
  const latestCode: any = chat.filter((message: any) => message.choices && message.choices.length > 0 && message.choices[0].message.role === 'assistant').pop();

  return (
    <div className='h-screen w-screen p-20'>
     <MessagesDisplay userMessages={filteredUserMessages} />
     <input value={value} onChange={(e: any) => setValue(e.target.value)} className='w-full rounded p-2 my-5 border border-black/20' placeholder='Digite aqui' />
     <CodeDisplay text={latestCode?.choices[0].message.content || ''} />

     <div className='flex items-center justify-end gap-2 mt-5'>
        <button onClick={getQuery} className='font-bold p-[7px] border-none bg-blue-500/80 hover:bg-blue-500'>GET QUERY!</button>
        <button onClick={clearChat} className='font-bold p-[7px] border-none bg-red-500/80 hover:bg-red-500'>CLEAR CHAT</button>
     </div>
    </div>
  )
}

export default App
