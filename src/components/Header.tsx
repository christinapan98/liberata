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
              <a id="Header-problems" href="#section-two">
                Current problems
              </a>
              {/* <a id="Header-how-it-works" href="#section-three">
                The Liberata system
              </a> */}
              {/* <a href="#section-four">
                FAQ
              </a> */}
              <a id="Header-contact" href="#section-five">
                Contact
              </a>
            </span>
            
            {/* insert whitepaper link here */}
            <a href="https://docs.google.com/document/d/15CcvTbmist-dSgsto2hurLP8hjlUe7t6fq_C2MGNNJo/edit?usp=sharing" target="blank" style={{display: 'flex', alignItems: 'bottom'}}> 
              Technical paper
              <ArrowOutward style={{fontSize: '20px', marginLeft: '4px'}}/>
            </a>
        </div>
      </div>
    </>
    
  )
}

export default Header