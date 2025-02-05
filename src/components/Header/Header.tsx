// 'use client';

import React, { FormEvent, useState } from 'react';
import Link from 'next/link';

import Sidebar from './Sidebar';

const Header = () => {
  const menuItem = ['Home', 'Feature', 'Community', 'Blog', 'Pricing']

  return (
    <header className='w-screen bg-white fixed flex justify-between items-center py-5 px-5 md:py-3 z-50'>
      <span className='text-stone-900 font-semibold text-2xl'>Nexcode</span>

        <nav className='hidden text-[#4D4D4D] md:flex gap-x-8'>
            <ul className='flex items-center font-medium gap-x-5'>
                {menuItem.map((item, index) => (
                  <Link href={"/"} className='hover:bg-zinc-200 p-2 rounded-sm' key={index}>{menuItem[index]}</Link>
                ))}
            </ul>
            <Link href='#' className='bg-green-500 hover:bg-green-700 text-white p-3 mr-5 rounded-md'>
                Register Now
            </Link>
        </nav>
        <div className='md:hidden'>
          <Sidebar />
        </div>    
    </header>
  )
}

export default Header