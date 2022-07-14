import React from 'react';
import '../css/Main.css';
function Main() {
  return (
    <main className='Main'>
      <h2 className='hi'>hi there,</h2>
      <p className='about-me'>
        This is <b>Ali</b>. I am a 18 year old self-taught{' '}
        <b>front-end developer</b> based in <b>Neyshabour, Iran</b>.Since I was
        a child, I have been very interested in computers. When I wanted to
        start a career, I thought, what better job than what I'm passionate
        about? This is how I decided to learn web development and now I am a
        junior front-end developer. If you would like to work with me,{' '}
        <b>
          <a href='mailto:lotfi26.ali@gmail.com'>drop me an email</a>
        </b>
        .
      </p>
    </main>
  );
}

export default Main;
