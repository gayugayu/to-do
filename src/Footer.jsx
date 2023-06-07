import React, { useState } from 'react'
import {AiOutlinePlus,AiOutlineSearch} from 'react-icons/ai'
import {GiVerticalFlip} from 'react-icons/gi'

const Footer = () => {
  const[val ,setVal]= useState([])
  const addItems =()=>{
       const abc =[...val,[]]
       setVal(abc)
  }
  return (
     <div className='h-[50px]'>
     <div className='flex justify-between bg-green-100'>
      <button onClick={addItems} 
         className='border  w-20  mr-5 items-end  space-x-2'>
        <AiOutlinePlus color='black' size={30}/>
      </button>
        {val.map((data,i)=>{
          
        })}
      <AiOutlineSearch  color='gray' size={30}/>
      <GiVerticalFlip color='gray' size={30}/>
      <h6 className='mr-[200px]' >3 items left</h6>
      <button className='border  w-10 mr-5 items-end space-x-2'>All</button>
      <button className='border  w-20  mr-5 items-end space-x-2'>Active</button>
      <button className='border  w-20  mr-5 items-end  space-x-2'>Completed</button>
    </div>

 </div>
  )
}

export default Footer
