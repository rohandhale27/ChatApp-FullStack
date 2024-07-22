import React, { useState } from 'react'
import { IoMdLogOut } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";

import Cookies from "js-cookie"
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Logget = () => {
  const [loading,setLoading]=useState(false)
  const handleLogout= async()=>{
    setLoading(true)
   try {
     const response=await axios.post("/api/users/logout")
     localStorage.removeItem("Chatapp")
     Cookies.remove("jwt")
     setLoading(false)
     toast.success("Logged out successfully")
     window.location.reload();
    
   } catch (error) {
    console.log("Error in Logout",+error)
   }
  }
  return (
    <>
    <hr />
    <div className=" h-[10vh] bg-transparent">
      <div>
        <BiLogOutCircle
          className="text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full p-2 ml-2 mt-1"
          onClick={handleLogout}
        />
      </div>
    </div>
  </>
  )
}

export default Logget