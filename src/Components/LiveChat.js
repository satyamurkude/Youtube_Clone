import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage,setLiveMessage]=useState("")
  const dispatch = useDispatch();
  const chatMessages=useSelector(store=>store.chat.messages)

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(addMessage({ name: generateRandomName(), message: makeRandomMessage(20) }));
    }, 1500);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [dispatch]); // Added dispatch as a dependency

  return (
    <>
    <div className='p-2 ml-2 w-full bg-slate-100 rounded-lg h-[500px] border border-black overflow-y-scroll'>
      {/* Provide a key to each ChatMessage */}
      {chatMessages.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message } />
      ))}

    
    </div>
    <form className='bg-slate-300 border mt-2 ml-3 border-black ' onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addMessage({
        name:"Satyam",
        message:liveMessage,
      }))
      setLiveMessage("")
      }}>
      <input className='w-[80%] px-2 mx-1' type='text' value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}}/>
      <button className='px-2 mx-2 w-20 m-1 bg-green-400 rounded-xl border border-black'>Send</button>
    </form>
    </>
  );
};

export default LiveChat;
