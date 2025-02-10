import React, {useEffect, useRef} from 'react';
import './App.css';
import Header from './components/Header';
import OverviewVideo from './videos/Liberata_Overview.mp4'
import Hook from './components/Hook';
import MeritProblemSection from './components/MeritProblemSection';
import EconomicProblemSection from './components/EconomicProblemSection';
import TrustProblemSection from './components/TrustProblemSection';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ShareholderModel from './components/ShareholderModel';
import FAQ from './components/FAQ';

function App() {
  const videoRef = useRef(null);
  const problemRef = useRef(null);
  const contactRef = useRef(null);
  let shouldAutoplay = true;

  // Overview video observer
  useEffect(() => {
    let myVideoRef = videoRef.current || null;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && myVideoRef && shouldAutoplay) {
            (myVideoRef as HTMLVideoElement).play();
            shouldAutoplay = false;
          } else if(!entry.isIntersecting && myVideoRef) {
            (myVideoRef as HTMLVideoElement).pause();
          }
        });
      },
      { threshold: 0.5 }
    );
    if(myVideoRef) observer.observe(myVideoRef);
  }, []);

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
    const sectionOne = document.getElementById("section-one");
    const sectionTwo = document.getElementById("section-two");
    // const sectionThree = document.getElementById("section-three");
    const sectionFive = document.getElementById("section-five");
    const sectionTwoHeader = document.getElementById("Header-problems");
    const sectionThreeHeader = document.getElementById("Header-how-it-works");
    const sectionFiveHeader = document.getElementById("Header-contact");
    let prev: any;
    const observerCallback = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if(prev) {
            prev.classList.remove('section-active');
          }
          switch(entry.target.id) {
            case "section-two":
              if(sectionTwoHeader) {
                sectionTwoHeader.classList.add('section-active');
                prev = sectionTwoHeader;
              }
              break;
            case "section-three":
              if(sectionThreeHeader) {
                sectionThreeHeader.classList.add('section-active');
                prev = sectionThreeHeader;
              }
              break;
            case "section-five":
              if(sectionFiveHeader) {
                sectionFiveHeader.classList.add('section-active');
                prev = sectionFiveHeader;
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
    observer.observe(sectionTwo);
    // observer.observe(sectionThree);
    observer.observe(sectionFive);
  }, []);

  const scrollToSection = (sectionId: string) => {
    switch(sectionId) {
      case "section-two":
        if(problemRef.current) {
          problemRef.current.scrollIntoView({behavior: 'smooth'});
        }
        break;
      case "section-five":
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
      <div className="Header-accent"></div>
      <Header scrollToSection={scrollToSection} />

      <div className="App-body">
        {/* Hook and overview */}
        <div className="App-section" id="section-one">
          <Hook/>
        </div>

        <div className="App-section App-body-section">
          <video ref={videoRef} src={OverviewVideo} width="100%" 
          id="section-one-video"
          controls muted/>
        </div>

        {/* Three problems */}
        <div id="section-two" ref={problemRef}>
          <div className="App-section App-body-section App-problem">
            <MeritProblemSection/>
          </div>

          <div className="App-section App-body-section App-problem">
            <EconomicProblemSection/>
          </div>

          <div className="App-section App-body-section App-problem">
            <TrustProblemSection/>
          </div>
        </div>

        {/* How it works */}
        {/* <div className="App-section App-body-section" id="section-three">
          <ShareholderModel/>
        </div> */}

        {/* Frequently asked questions */}
        {/* <div className="App-section App-body-section" id="section-four">
          <FAQ/>
        </div> */}

        {/* Contact form */}
        <div className="App-section" ref={contactRef} id="section-five">
          <Contact/>
        </div>
      </div>

      <div className="App-footer" id="App-footer" style={{height: '13vh'}}>
        {/* <Footer/>
        <div className="Footer-accent"></div> */}
      </div>
      
    </div>
  );
}

export default App;
