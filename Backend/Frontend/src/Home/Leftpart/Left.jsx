import React from 'react'
import Search from './Search';
import Users from './Users';
import Logget from './Logget';


const Left = () => {
  return (
    <div className=' w-full  bg-slate-900 text-gray-300' >
      <Search/>
      <div className=" flex-1 overflow-y-auto"
      style={{minHeight: "calc(84vh - 10vh)"}}>
     <Users/> 
      </div>
   

      <Logget/>
      
    </div>
  )
}

export default Left;