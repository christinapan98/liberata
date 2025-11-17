import React, {useState, useEffect} from 'react';
import {ArrowOutward} from '@mui/icons-material';
import {NavLink} from 'react-router-dom'
import MenuDrawer from './MenuDrawer';
import logoWhite from '../images/Logo_White.png'
import logoBlue from '../images/Logo_Blue.png'
import './Header.css';

function Header({scrollToSection = () => {} }) {
  //Control the animation of header when scrolled past Intro
  const [scrolledPastIntro, setscrolledPastIntro] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const introBackground = document.getElementById("intro"); 
      if (!introBackground) {
        setscrolledPastIntro(true);
        return;
      }
      const introBackgroundHeight = introBackground?.offsetHeight || window.innerHeight;
      
      if(window.scrollY >=introBackgroundHeight*0.9){
        setscrolledPastIntro(true);
      } else{
        setscrolledPastIntro(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return() => window.removeEventListener('scroll', handleScroll)
  }, []);
  return (
    <>
      <div className={`Header-wrapper ${scrolledPastIntro ? "scrolled" : ""}`}>
        <div className="Header-body">
            <span className="Header-nav">
                <a id="Header-logo" href="#section-hook">
                  <img src={scrolledPastIntro ? logoBlue: logoWhite} alt="Liberata logo"/>
                </a>
                <NavLink id="Header-overview" className="Header-navbar" to="/">
                  Overview
                </NavLink>
                <NavLink id="Header-team" className="Header-navbar" to="/team">
                  Team
                </NavLink>
                {/* <a id="Header-problems" className="Header-navbar" href="#section-problems">
                  Current publishing problems
                </a> */}
                {/* <a href="#section-four">
                  FAQ
                </a> */}
                {/* <a id="Header-contact" className="Header-navbar" href="#section-contact">
                  Contact
                </a> */}
              </span>
              
              {/* Technical paper disabled while updates are being made */}
              {/* <a className="Header-navbar" href="https://docs.google.com/document/d/15CcvTbmist-dSgsto2hurLP8hjlUe7t6fq_C2MGNNJo/edit?usp=sharing" target="blank" style={{display: 'flex', alignItems: 'bottom'}}> 
                Technical paper
                <ArrowOutward style={{fontSize: '20px', marginLeft: '4px'}}/>
              </a> */}
              
          <div className={`Header-hamburger ${scrolledPastIntro ? "scrolled" : ""}`}>
            <MenuDrawer scrollToSection={scrollToSection}/>
          </div> 
        </div>
      </div>
    </>
  )
}

export default Header