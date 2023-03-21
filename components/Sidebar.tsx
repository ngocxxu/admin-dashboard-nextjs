import Link from 'next/link';
import { ScriptProps } from 'next/script';
import React from 'react';
import { RxDashboard, RxPerson, RxSketchLogo } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

const Sidebar: React.FC<ScriptProps> = ({ children }) => {
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className='bg-purple-800 p-3 text-white rounded-lg inline-block'>
              <RxSketchLogo />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 p-3 my-4 cursor-pointer rounded-lg inline-block'>
              <RxDashboard />
            </div> 
          </Link>
          <Link href='/customers'>
            <div className='bg-gray-100 hover:bg-gray-200 p-3 my-4 cursor-pointer rounded-lg inline-block'>
              <RxPerson />
            </div>
          </Link>
          <Link href='/orders'>
            <div className='bg-gray-100 hover:bg-gray-200 p-3 my-4 cursor-pointer rounded-lg inline-block'>
              <HiOutlineShoppingBag />
            </div>
          </Link>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 p-3 my-4 cursor-pointer rounded-lg inline-block'>
              <FiSettings />
            </div>
          </Link>
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
