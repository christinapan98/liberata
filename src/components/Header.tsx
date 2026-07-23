import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MenuDrawer from './MenuDrawer';
import logoWhite from '../images/Logo_White.png'
import logoBlue from '../images/Logo_Blue.png'
import './Header.css';

function Header({ scrollToSection = () => { }, forceLight = false }) {
  //Control the animation of header when scrolled past Intro
  const location = useLocation();
  const [scrolledPastIntro, setscrolledPastIntro] = useState(false);
  useEffect(() => {
    if (location.pathname === "/beta-signup" || location.pathname === "/platforms") {
      setscrolledPastIntro(true);
      return;
    }

    const handleScroll = () => {
      const introBackground = document.getElementById("intro");
      // If we're on /beta-signup → force scrolled state
      if (!introBackground) {
        setscrolledPastIntro(true);
        return;
      }
      const introBackgroundHeight = introBackground?.offsetHeight || window.innerHeight;

      if (window.scrollY >= introBackgroundHeight * 0.9) {
        setscrolledPastIntro(true);
      } else {
        setscrolledPastIntro(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  const scrollToContact = () => {
    document.getElementById("section-contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className={`Header-wrapper ${(scrolledPastIntro && !forceLight) ? "scrolled" : ""}`}>
        <div className="Header-body">
          <span className="Header-nav">
            <Link to="/" id="Header-logo">
              <img src={(scrolledPastIntro && !forceLight) ? logoBlue : logoWhite} alt="Liberata logo" />
            </Link>
            <NavLink id="Header-overview" className="Header-navbar" to="/">
              Overview
            </NavLink>
            <NavLink to="/products" className="Header-navbar">
              Products ▾
            </NavLink>
            <NavLink to="/research" className="Header-navbar">
              Research
            </NavLink>
            <NavLink to="/team" className="Header-navbar">
              Team
            </NavLink>
            {/* Pages coming soon — shown dimmed per the wireframe until they exist */}
            <span className="Header-navbar Header-navbar-upcoming">News</span>
          </span>

          <span className="Header-ctas">
            <button type="button" className="Header-cta Header-cta-outline" onClick={scrollToContact}>
              Contact
            </button>
            <Link to="/beta-signup" className="Header-cta Header-cta-solid">
              Sign up for beta
            </Link>
          </span>

          <div className={`Header-hamburger ${scrolledPastIntro ? "scrolled" : ""}`}>
            <MenuDrawer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
