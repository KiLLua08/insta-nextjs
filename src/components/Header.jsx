"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Modal from 'react-modal'
import { IoMdAddCircleOutline } from "react-icons/io";
import { FcCamera } from "react-icons/fc";
import { AiOutlineCloseSquare } from "react-icons/ai";

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='shadow-sm border-b sticky top-0 bg-white z-30 p-3'>
      <div className='flex justify-between items-center max-w-6xl mx-auto'>
        {/*logo*/}
        <Link href='/'>
          <img src='/instagram_logo.svg' alt="logo" width={120} className='hidden lg:inline-flex'/>
        </Link>
        <Link href='/'>
          <img src='/instagram.svg' alt="logo" width={40} className='lg:hidden'/>
        </Link>
        {/*search*/}
        <input type="text" placeholder='Search' className='bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]' />
        {/*menu*/}
         <div className='flex gap-3 items-center'>
          <IoMdAddCircleOutline className='text-2xl hover:scale-125 hover:text-red-600 cursor-pointer transition duration-500' onClick={()=>setIsOpen(true)}/>
          <button className='text-sm font-semibold text-blue-500'>Login</button>
         </div>
      </div>
      {isOpen && (
        <Modal 
        isOpen={isOpen} 
        className='mt-60 mx-10 flex justify-center items-center rounded-md shadow-md p-4' 
        onRequestClose={() => setIsOpen(false)}
        ariaHideApp={false}>
          <div className='flex flex-col justify-between items-center py-2 gap-5 h-[100%] w-[100%]'>
            <AiOutlineCloseSquare className='self-end hover:text-red-600 cursor-pointer text-xl' onClick={()=> setIsOpen(false)}/>
            <FcCamera className='text-4xl'/>
            <input type="text" className='border-none text-center w-full focus:ring-0 outline-none rounded-sm shadow-sm' placeholder='Please enter your caption...' />
            <button className='bg-slate-700 text-white py-2 w-full rounded-md shadow-md disabled:bg-slate-400 disabled:cursor-not-allowed disabled:brightness-105 hover:bg-slate-600'>Upload Post</button>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default Header