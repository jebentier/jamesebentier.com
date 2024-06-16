import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <img src="/favicon.ico" alt="James Ebentier" />
      <ul className='nav'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/projects'>Projects</NavLink></li>
        <li><NavLink to='/resume'>Resume</NavLink></li>
      </ul>
    </header>
  );
}
