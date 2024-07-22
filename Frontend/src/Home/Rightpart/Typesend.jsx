import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";
import useSendMessages from '../../context/useSendMessages.js';

const Typesend = () => {
  const [message, setMessage] = useState("");
  const { loading,sendMessages } = useSendMessages();

  const handleSubmit = async (e) => {
      console.log(e);
      e.preventDefault();
      await sendMessages(message);      
      setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex space-x-2 text-center h-[8vh] bg-gray-800 mt-[5%]'>
        <div className="flex w-[90%] mx-4">
          <input
            type="text"
            placeholder="Type here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-700 w-full rounded-xl outline-none px-4 py-3"
          />
          <button  className='text-4xl mx-3'>
            <IoSend />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Typesend;
