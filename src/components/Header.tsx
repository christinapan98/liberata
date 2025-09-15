import React from 'react';
import {ArrowOutward} from '@mui/icons-material';
import MenuDrawer from './MenuDrawer';
import logoWhite from '../images/Logo_White.png'
import './Header.css';

function Header({scrollToSection}) {
  return (
    <>
      <div className='Header-wrapper'>
        <div className="Header-body">
            <span className="Header-nav">
                <a id="Header-logo" href="#section-hook">
                  <img src={logoWhite} alt="Liberata logo"/>
                </a>
                <a id="Header-overview" className="Header-navbar" href="#section-overview">
                  Overview
                </a>
                <a id="Header-problems" className="Header-navbar" href="#section-problems">
                  Current publishing problems
                </a>
                {/* <a href="#section-four">
                  FAQ
                </a> */}
                <a id="Header-contact" className="Header-navbar" href="#section-contact">
                  Contact
                </a>
              </span>
              
              {/* Technical paper disabled while updates are being made */}
              {/* <a className="Header-navbar" href="https://docs.google.com/document/d/15CcvTbmist-dSgsto2hurLP8hjlUe7t6fq_C2MGNNJo/edit?usp=sharing" target="blank" style={{display: 'flex', alignItems: 'bottom'}}> 
                Technical paper
                <ArrowOutward style={{fontSize: '20px', marginLeft: '4px'}}/>
              </a> */}
              
          <div className="Header-hamburger">
            <MenuDrawer scrollToSection={scrollToSection}/>
          </div> 
        </div>
      </div>
    </>
  )
}

export default Header