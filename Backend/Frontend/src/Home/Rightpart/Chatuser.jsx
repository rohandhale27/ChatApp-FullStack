import React from 'react'
import useConversation from '../../zustand/useConversation.js'
import { useSocketContext } from '../../context/SocketContext.jsx';
import { CiMenuFries } from "react-icons/ci";


const Chatuser = () => {
    const{selectedConversation}=useConversation();
    const{onlineUsers}=useSocketContext();
    const getOnlineUsersStatus=(userId)=>{
        return onlineUsers.includes(userId)?"Online":"Offline"
    }

    return (
        <div className="relative flex items-center h-[8%] justify-center gap-4 bg-slate-800 hover:bg-slate-700 duration-300 rounded-md">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
        <div className='flex justify-center space-x-3 h-[8vh] bg-slate-800 hover:bg-gray-700 duration-300'>
            <div className="avatar online">
                <div className="w-16 rounded-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG2A1WfO0dN2giiE4ggozrg00TrLaEf6kYZA&s.jpg" />
                </div>
            </div>
            <div>
            <h1 className='text-xl'>{selectedConversation.fullname}</h1>
            <span className='text-sm'>{getOnlineUsersStatus(selectedConversation._id)}</span>
            </div>
        </div>
        </div>
        
    )
}

export default Chatuser