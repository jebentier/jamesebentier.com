import { GitHub, LinkedIn, RssFeed, Twitter } from '@mui/icons-material';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer = () => (
  <footer className="bg-base-200 border-t border-base-content/10">
    <div className="max-w-7xl mx-auto px-8 py-24">
      <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a href="/#" aria-current="page" className="flex gap-2 justify-center md:justify-start items-center">
            <img src='/favicon.ico' alt="James Ebentier" className='w-6 h-6' width='24' height='24' />
            <strong className="font-extrabold tracking-tight text-base md:text-lg">
              James Ebentier
            </strong>
          </a>

          <p className="mt-3 text-sm text-base-content/60">
            Copyright © James Ebentier {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
        <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
              Links
            </div>

            <ul className='flex flex-col list-none justify-center items-center md:items-start gap-2 mb-10 text-sm'>
              <li className='ml-4'><NavLink className='text-[#333] hover:underline' to='/blog'>Blog</NavLink></li>
              <li className='ml-4'><NavLink className='text-[#333] hover:underline' to='/projects'>Projects</NavLink></li>
              <li className='ml-4'><NavLink className='text-[#333] hover:underline' to='/resume'>Resume</NavLink></li>
            </ul>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
              Social
            </div>

            <div className="flex flex-row space-x-4 items-start mb-10 text-sm">
              <a href='https://twitter.com/jebentier' rel='noreferrer' target='_blank' title='jebentier twitter account'><Twitter htmlColor='#1da1f2' /></a>
              <a href='https://linkedin.com/in/jebentier' rel='noreferrer' target='_blank' title='jebentier linkedin account'><LinkedIn htmlColor='#0072b1' /></a>
              <a href='https://github.com/jebentier' rel='noreferrer' target='_blank' title='jebentier github account'><GitHub /></a>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
              Feeds
            </div>

            <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
              <a href='/blog/rss.xml' rel='noreferrer' target='_blank' title='blog rss feed'><RssFeed htmlColor='orange' /> Blog</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
