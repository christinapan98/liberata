import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import Header from './components/Header';
import Hook from './components/Hook';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  const videoRef = useRef(null);
  const problemRef = useRef(null);
  const contactRef = useRef(null);
  
  // Logic that enables video autoplay
  //let shouldAutoplay = true;
  // useEffect(() => {
  //   let myVideoRef = videoRef.current || null;
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting && myVideoRef && shouldAutoplay) {
  //           (myVideoRef as HTMLVideoElement).play();
  //           shouldAutoplay = false;
  //         } else if(!entry.isIntersecting && myVideoRef) {
  //           (myVideoRef as HTMLVideoElement).pause();
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );
  //   if(myVideoRef) observer.observe(myVideoRef);
  // }, []);

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
    const sectionTwo = document.getElementById("section-problems");
    const sectionOverview = document.getElementById("section-overview");
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
    // observer.observe(sectionTwo);
    // observer.observe(sectionOverview);
    observer.observe(sectionContact);
  }, []);

  const introRef = useRef(null);
  const overlayRef = useRef(null);
  

  useEffect(() => {
    const intro = introRef.current;
    const overlay = overlayRef.current;
    if (!intro || !overlay) return;

    function handleMouseMove(e) {
      const rect = intro.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotateX = y * -60;   // tilt up/down
      const rotateY = x * 20;  // tilt left/right

      overlay.style.transform = `translate(${rotateX}px,  ${rotateY}px`;
    }

    function handleMouseLeave() {
      overlay.style.transform = `rotateX(0deg) rotateY(0deg)`; // reset
    }

    intro.addEventListener("mousemove", handleMouseMove);
    intro.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      intro.removeEventListener("mousemove", handleMouseMove);
      intro.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const MISSION_TEXT = "To democratize an academic review system influenced by politics";
  const TYPING_SPEED = 25;
  const [displayedText, setDisplayedText] = useState("");
  const textRef = useRef(null);
  const [hasTypingStarted, setHasTypingStarted] = useState(false);

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
      <div className="App-intro" ref={introRef}>
        {/* Page header */}
        <Header scrollToSection={scrollToSection} />
        <div className="App-section" id="section-hook">
          <Hook/>
        </div>

        {/* Background */}
        <div className="App-background">
          <div className="App-background-overlay" ref={overlayRef}></div>
          <div className="App-background-gradient"></div>
          
        </div>
      </div>
      
      

      <div className="App-body-container">
        
        {/* Three problems */}
        {/* <div id="section-problems" ref={problemRef}>
          <div className="App-section App-problem">
            <MeritProblemSection/>
          </div>

          <div className="App-section App-problem">
            <EconomicProblemSection/>
          </div>

          <div className="App-section App-problem">
            <TrustProblemSection/>
          </div>
        </div> */}
        <div className="App-column-container">
          <div className="App-column-left">
            <div className="App-section App-mission App-col-left-section">
              <div className="section-heading">/Our Mission</div>
              <div id="mission-heading" ref={textRef}>
               {displayedText}
              </div>
              <div id="mission-body">
                Our existing academic review system is influenced by politics in places where it should be impartial. With an open-source publishing platform that follows a shareholder model distribution of credit, Liberata seeks to reward all academic contributors fairly.
              </div>
            </div>
            <div className="App-section App-overview-video App-col-left-section">
              <div className="section-heading">/How It Works</div>
              <div style={{color: 'grey', fontSize: '1.2rem', marginBottom: '10vh'}}>Watch a brief overview video explaining the logic behind Liberata.</div>
              
              {/* Since they are large files, our explainer videos must be stored in AWS. */}
              <video ref={videoRef} src="https://liberata-overview-videos.s3.us-east-1.amazonaws.com/Cover_Edited_Liberata+Overview.mp4" width="100%" 
              id="section-one-video"
              controls muted/>
            </div>
            <div className="App-section App-col-left-section" id="App-solutions">
              <div className="section-heading">/Our Solution</div>
            </div>
          </div>


          <div className="App-column-right">
            <div> Our Mission </div>
            <div> How It Works </div>
            <div> Our Solution </div>
          </div>
        </div>
        {/* Contact form */}
        <div className="App-section" ref={contactRef} id="section-contact">
          <Contact/>
        </div>
      </div>

      

      {/* Footer, including social media links */}
      <div className="App-footer" id="App-footer">
        <Footer/>
        <div className="Footer-accent"></div>
      </div>
      
    </div>
  );
}

export default App;
