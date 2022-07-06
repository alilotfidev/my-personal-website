import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className='Footer'>
      <h4>Links</h4>
      <div className='links'>
        <a href='https://www.linkedin.com/in/alilotfidev/' className='link'>
          Linkedin
        </a>
        <a href='https://codepen.io/alilotfidev' className='link'>
          Codepen
        </a>
        <a href='https://twitter.com/alilotfidev' className='link'>
          Twitter
        </a>
        <a href='mailto:lotfi26.ali@gmail.com' className='link'>
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
