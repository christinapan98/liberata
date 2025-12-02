import React, {useState, useEffect, useRef} from 'react';
import Header from '../components/Header';
import Hook from '../components/Hook';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import OurSolution from '../components/OurSolution';
import AcademicPublishingProblems from '../components/AcademicPublishingProblems'
import '../App.css';

function OverviewPage() {
  const introRef = useRef(null);
  const overlayRef = useRef(null);
  const videoRef = useRef(null);
  const problemRef = useRef(null);
  const contactRef = useRef(null);

  const MISSION_TEXT = "Open access academic publishing with incentivized quality controls.";
  const TYPING_SPEED = 25;
  const [displayedText, setDisplayedText] = useState("");
  const textRef = useRef(null);
  const [hasTypingStarted, setHasTypingStarted] = useState(false);

  // Section observer
  useEffect(() => {
    const sectionItems = document.getElementsByClassName("App-section");
    const observerCallback = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0px)";
          observer.unobserve(entry.target);
        }
        });
    };
    const observer = new IntersectionObserver(observerCallback);
    Array.from(sectionItems).forEach((e) => {
      observer.observe(e);
    });
  }, []);

  // Set up another observer for the main body sections
  // Whenever they are scrolled into, detect the corresponding entry id
  // Then add active class to the header title that matches the entry id
  // Also be mindful of when none of the sections should be highlighted
  // detect when section is scrolled out of as well
  useEffect(() => {
    const sectionOne = document.getElementById("section-hook");
    const sectionContact = document.getElementById("section-contact");
    const sectionTwoHeader = document.getElementById("Header-problems");
    const sectionOverviewHeader = document.getElementById("Header-overview");
    const sectionContactHeader = document.getElementById("Header-contact");
    let prev: any;
    const observerCallback = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if(prev) {
            prev.classList.remove('section-active');
          }
          switch(entry.target.id) {
            case "section-overview":
              if(sectionOverviewHeader) {
                sectionOverviewHeader.classList.add('section-active');
                prev = sectionOverviewHeader;
              }
              break;
            case "section-problems":
              if(sectionTwoHeader) {
                sectionTwoHeader.classList.add('section-active');
                prev = sectionTwoHeader;
              }
              break;
            case "section-contact":
              if(sectionContactHeader) {
                sectionContactHeader.classList.add('section-active');
                prev = sectionContactHeader;
              }
              break;
            default:
              if(prev) {
                prev.classList.remove('section-active');
              }
              break;
          }
        } else {
          entry.target.classList.remove('section-active');
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback);
    observer.observe(sectionOne);
    observer.observe(sectionContact);
  }, []);

  // Add slight overlay shift when user moves mouse inside landing page
  useEffect(() => {
    const intro:HTMLElement | null = introRef.current;
    const overlay:HTMLElement | null = overlayRef.current;
    if (!intro || !overlay) return;

    function handleMouseMove(e) {
      if (!intro || !overlay) return;
      const rect = intro.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const moveX = (x * 50) + (y * 50);
      const moveY = x * 20; 
      overlay.style.transform = `translate(${moveX}px,  ${moveY}px)`;
    }

    function handleMouseLeave() {
      if (!intro || !overlay) return;
      overlay.style.transform = `rotateX(0deg) rotateY(0deg)`; // reset
    }

    intro.addEventListener("mousemove", handleMouseMove);
    intro.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      intro.removeEventListener("mousemove", handleMouseMove);
      intro.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTypingStarted) {
            setHasTypingStarted(true);
            obs.unobserve(el); // run only once
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasTypingStarted]);

  useEffect(() => {
    if (!hasTypingStarted) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(MISSION_TEXT.slice(0, i + 1));
      i++;
      if (i >= MISSION_TEXT.length) clearInterval(interval);
    }, TYPING_SPEED);
    
    return () => clearInterval(interval);
  }, [hasTypingStarted, MISSION_TEXT, TYPING_SPEED]);

  const scrollToSection = (sectionId: string) => {
    switch(sectionId) {
      case "section-overview":
        if(videoRef.current) {
          videoRef.current.scrollIntoView({behavior: 'smooth'});
        }
        break;
      case "section-problems":
        if(problemRef.current) {
          problemRef.current.scrollIntoView({behavior: 'smooth'});
        }
        break;
      case "section-contact":
        if(contactRef.current) {
          contactRef.current.scrollIntoView({behavior: 'smooth'});
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="App-intro" ref={introRef} id="intro">
        {/* Page header */}
        <Header/>
        <div className="App-section" id="section-hook">
          <Hook
            header = "Introducing Liberata."
            subheader = "Learn about how Liberata uses game theory and graph theory to solve entrenched problems with academic publishing."
            subtext = "Open access academic publishing with incentivized quality controls."
          />
        </div>

        {/* Intro background */}
        <div className="App-background">
          <div className="App-background-overlay" ref={overlayRef}></div>
          <div className="App-background-gradient"></div>
        </div>
      </div>
      
      <div className="App-body-container">
        <div className="App-column-container">
          <div className="App-column-left">
            <div className="App-section App-col-left-section" id="App-problems">
              <div className="section-heading">/Academic Publishing Problems</div>
              <div style={{color: 'grey', fontSize: '1.2rem', marginTop: '5vh'}}>Academic publishing suffers from a merit, economic, and societal problems today arising from maligned legacy incentive structures.</div>
                <AcademicPublishingProblems/>
            </div>
            <div className="App-section App-col-left-section" id="App-mission">
              <div className="section-heading">/Liberata's Mission</div>
              <div id="mission-heading" ref={textRef}>
               {displayedText}
              </div>
              <div id="mission-body">
                Liberata leverages game theory to redesign the academic publishing for proper incentive alignment between stakeholders, and graph theory to measure and monitor impact, behavior, risk, and state of health of academic entities.
              </div>
            </div>
            <div className="App-section App-col-left-section" id="App-overview-video">
              <div className="section-heading">/The Liberata System</div>
              <div style={{color: 'grey', fontSize: '1.2rem', marginBottom: '10vh'}}>Watch a brief overview video explaining the logic behind Liberata.</div>
              
              {/* Since they are large files, our explainer videos must be stored in AWS. */}
              <video ref={videoRef} src="https://liberata-overview-videos.s3.us-east-1.amazonaws.com/Cover_Edited_Liberata+Overview.mp4" width="100%" id="section-one-video" controls muted/>
            </div>
            <div className="App-section App-col-left-section" id="App-solutions">
              <div className="section-heading">/Key Concepts</div>
              <OurSolution/>
            </div>
            {/* <div className="App-section App-col-left-section" id="App-FAQ">
              <div className="section-heading">/Frequently Asked Questions</div>
            </div> */}
          </div>

          <div className="App-column-right">
            <a href="#App-problems">Academic Problems</a>
            <a href="#App-mission">Liberata's Mission</a>
            <a href="#App-overview-video">The Liberata System</a>
            <a href="#App-solutions">Key Concepts</a>
            <a href="#App-FAQ">FAQ</a>
            <a href="#section-contact">Join Us</a>
          </div>
        </div>

        {/* Contact form */}
        <div className="App-section" ref={contactRef} id="section-contact">
          <Contact/>
        </div>
      </div>

      {/* Footer, including social media links */}
      {/* <div className="App-footer" id="App-footer">
        <Footer/>
        <div className="Footer-accent"></div>
      </div>  */}
    </div>
  );
}
export default OverviewPage;
