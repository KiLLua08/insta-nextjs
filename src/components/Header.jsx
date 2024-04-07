import Link from 'next/link'
import React from 'react'

function Header() {
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
        <button className='text-sm font-semibold text-blue-500'>Login</button>
      </div>
    </div>
  )
}

export default Header
Header