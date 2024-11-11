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
              <a href="#section-one">
                Creating solutions
              </a>
              <a href="#section-two">
                Video Playlist
              </a>
              <a href="#section-three">
                FAQ
              </a>
              <a href="#section-four">
                Get in touch
              </a>
            </span>
            
            {/* insert whitepaper link here */}
            <a href="" style={{display: 'flex', alignItems: 'botto'}}> 
              Whitepaper
              <ArrowOutward style={{fontSize: '20px', marginLeft: '4px'}}/>
            </a>
        </div>
      </div>
    </>
    
  )
}

export default Header