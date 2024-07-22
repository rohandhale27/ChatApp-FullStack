import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../context/useGetMessages.js'
import Loading from '../../components/Loading.jsx'
import useGetSocketMessage from '../../context/useGetSocketMessage.js'

const Messages = () => {
  const{loading,messages}=useGetMessages();
  useGetSocketMessage();//Listening incoming messages
  console.log(messages)
  const lastMsgRef=useRef();
  useEffect(()=>{
    setTimeout(()=>{
      if(lastMsgRef.current)
        {
          lastMsgRef.current.scrollIntoView({
            behavior:"smooth",
          })
        }
    },100 )

  },[messages]);
  return (
    <div className='flex-2 flex-1 overflow-y-auto' style={{minHeight:'calc(84vh - 8vh)',maxHeight:'calc(86vh - 18vh)'}}>
       
       {loading?(<Loading/>):(messages.length>0 && messages.map((message)=>(
        <div  key={message._id} ref={lastMsgRef}>
          <Message message={message}/> </div>
        
       )))}
        {!loading && messages.length===0 && (
          <div>
            <p className='text-center my-5'>Say! Hi to start the conversation </p>
            </div>
        )}
      
    </div>
  );
}

export default Messages;