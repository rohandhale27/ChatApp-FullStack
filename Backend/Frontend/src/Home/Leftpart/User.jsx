import React from 'react';
import useConversation from '../../zustand/useConversation.js';
import { useSocketContext } from '../../context/SocketContext.jsx';

const User = ({ user }) => {
  const [selectedConversation, setSelectedConversation] = useConversation((state) => [state.selectedConversation, state.setSelectedConversation]);
  const isSelected = selectedConversation?._id === user._id;
  const {socket,onlineUsers}=useSocketContext()
  const isOnline=onlineUsers.includes(user._id);

  return (
    <div 
      className={`hover:bg-slate-600 duration-300 ${isSelected ? "bg-slate-700" : ""}`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-6 py-3 cursor-pointer">
        <div className={`avatar ${isOnline?"online":""} `}> 
          <div className="w-12 rounded-full">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG2A1WfO0dN2giiE4ggozrg00TrLaEf6kYZA&s" alt="User Avatar" />
          </div>
        </div>
        <div>
          <h1 className="font-bold">{user.fullname}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
