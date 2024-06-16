import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className='w-full shadow mb-8 print:hidden'>
      <div className='flex w-full max-w-7xl mx-auto px-8 py-4 print:hidden'>
        <img src="/favicon.ico" alt="James Ebentier" className='h-9 justify-self-start' />
        <ul className='flex flex-row list-none ml-auto content-center items-center justify-end my-auto'>
          <li className='ml-4'><NavLink className={({ isActive }) => `text-[#333] hover:underline ${isActive && 'text-[#fab73a] hover:no-underline cursor-default'}`} to='/'>Home</NavLink></li>
          <li className='ml-4'><NavLink className={({ isActive }) => `text-[#333] hover:underline ${isActive && 'text-[#fab73a] hover:no-underline cursor-default'}`} to='/blog'>Blog</NavLink></li>
          <li className='ml-4'><NavLink className={({ isActive }) => `text-[#333] hover:underline ${isActive && 'text-[#fab73a] hover:no-underline cursor-default'}`} to='/projects'>Projects</NavLink></li>
          <li className='ml-4'><NavLink className={({ isActive }) => `text-[#333] hover:underline ${isActive && 'text-[#fab73a] hover:no-underline cursor-default'}`} to='/resume'>Resume</NavLink></li>
        </ul>
      </div>
    </header>
  );
}
