import React from 'react';

export default function Home() {
  return (
    <div className='home'>
      <div className='bio'>
        <p>
          Hello, my name is <strong>James Ebentier.</strong><br />
          I am a <strong>Software Architect</strong> for <a href='https://invoca.com' target='_blank'>Invoca Inc.</a><br/>
          based out of <strong>Berlin, Germany.</strong><br/>
          Outside of work I am a <strong>hacker</strong>, community <strong>advocate</strong>, and <strong>mentor</strong> to any and all who seek it.
        </p>
        <img src='https://images.pexels.com/photos/358312/pexels-photo-358312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='James Ebentier Banner' />
      </div>
    </div>
  );
}
