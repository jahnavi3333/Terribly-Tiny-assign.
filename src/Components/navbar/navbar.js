import React from 'react';
import './navbar.css'
const Navbar = () => {
  return (
    <nav>
      <div className='button'>
      <div class="logo">
    <img src="images/news.png" alt="Logo"></img>
  </div>
  <h2 className='temp' >News Updates</h2>
        <button className='but'>News</button>
      </div>
    </nav>
  );
};

export default Navbar;
