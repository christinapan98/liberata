import React from 'react';
import {ArrowOutward} from '@mui/icons-material';
import './Header.css';


function Header() {
  return (
    <>
      <div className='Header-wrapper'>
        <div className="Header-body">
            <span className="Header-nav">
              <a id="Header-logo" href="#section-one">
                Liberata
              </a>
              <a href="#section-two">
                Addressing problems
              </a>
              <a href="#section-three">
                How it works
              </a>
              <a href="#section-four">
                Video playlist
              </a>
            </span>
            
            {/* insert whitepaper link here */}
            <a href="" style={{display: 'flex', alignItems: 'bottom'}}> 
              Whitepaper
              <ArrowOutward style={{fontSize: '20px', marginLeft: '4px'}}/>
            </a>
        </div>
      </div>
    </>
    
  )
}

export default Header