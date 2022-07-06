import React from 'react';
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className='Navbar'>
      <div className='name'>Ali Lotfi</div>
      <div className='blog'>
        <a href='https://dev.to/alilotfidev'>My Blog</a>
      </div>
    </nav>
  );
}

export default Navbar;
