import React from 'react';

export default function Home() {
  return (
    <div className='home'>
      <div className='bio'>
        <p>
          Hello, my name is <strong>James Ebentier.</strong><br />
          I am a <strong>Principle Software Engineer</strong> for <a href='https://invoca.com' target='_blank'>Invoca Inc.</a><br/>
          based out of <strong>Berlin, Germany.</strong><br/>
          Outside of work I am a <strong>mentor</strong> to any and all who seek it.
        </p>
        <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--P-zvMTgt--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/qyix6eyhrnc8x9c44yp2.jpg' alt='James Ebentier Banner' />
      </div>
    </div>
  );
}