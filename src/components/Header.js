import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <img src="/images/favicon.ico" alt="James Ebentier" />
      <ul className='nav'>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink exact to='/resume'>Resume</NavLink></li>
        <li><NavLink exact to='/social'>Social</NavLink></li>
      </ul>
    </header>
  );
}