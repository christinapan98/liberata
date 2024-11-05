import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='Header-wrapper'>
      <div className="Header-accent"></div>
      <div className="Header-body">
          
          <div id="Header-logo">
            Liberata
          </div>
          <a href="#section-one">
            Section 1
          </a>
          <a href="#section-two">
            Section 2
          </a>
          <a href="#section-three">
            Section 3
          </a>
          <a href="#section-four">
            Section 4
          </a>
      </div>
    </div>
  )
}

export default Header