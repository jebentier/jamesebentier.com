import React from 'react';

export default function Home() {
  return (
    <div className='home'>
      <div className='text-lg font-extralight text-center'>
        <p className='my-8 mx-auto max-w-2xl'>
          Hello, my name is <strong className='text-2xl m-3 text-green-500'>James Ebentier.</strong>
          <br />
          I am a <strong className='text-2xl m-3 text-purple-500'>Software Architect</strong> for <a href='https://invoca.com' target='_blank' rel='noreferrer' className='font-medium'>Invoca Inc.</a>
          <br/>
          based out of <strong className='text-2xl m-3 text-orange-500'>Berlin, Germany.</strong>
          <br/>
          Outside of work I am a <strong className='text-2xl m-3 text-pink-500'>hacker</strong>, community <strong className='text-2xl m-3 text-yellow-600'>advocate</strong>, and <strong className='text-2xl m-3 text-fuchsia-500'>mentor</strong> to any and all who seek it.
        </p>
        <img
          src='/images/landing-image.webp'
          alt='James Ebentier Banner'
          className='w-full rounded-xl mb-8'
        />
      </div>
    </div>
  );
}
