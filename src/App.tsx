import React, {useEffect, useRef} from 'react';
import './App.css';
import Header from './components/Header';
import Hook from './components/Hook';
import MeritProblemSection from './components/MeritProblemSection';
import EconomicProblemSection from './components/EconomicProblemSection';
import TrustProblemSection from './components/TrustProblemSection';
import Footer from './components/Footer';
import Contact from './components/Contact';
import FAQ from './components/FAQ';

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
    const sectionFive = document.getElementById("section-contact");
    const sectionTwoHeader = document.getElementById("Header-problems");
    const sectionOverviewHeader = document.getElementById("Header-overview");
    const sectionFiveHeader = document.getElementById("Header-contact");
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
    observer.observe(sectionOverview);
    observer.observe(sectionFive);
  }, []);

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
      <div className="App-intro">
        {/* Page header */}
        <Header scrollToSection={scrollToSection} />
        <div className="App-section" id="section-hook">
          <Hook/>
        </div>
      </div>

      <div className="App-body-container">
        {/* Hook and overview */}
        <div className="App-section" id="section-overview">
          {/* Since they are large files, our explainer videos must be stored in AWS. */}
          <video ref={videoRef} src="https://liberata-overview-videos.s3.us-east-1.amazonaws.com/Cover_Edited_Liberata+Overview.mp4" width="100%" 
          id="section-one-video"
          controls muted/>
        </div>

        
        {/* Three problems */}
        <div id="section-problems" ref={problemRef}></div>
        <div className="App-section App-problem">
          <MeritProblemSection/>
        </div>

        <div className="App-section App-problem">
          <EconomicProblemSection/>
        </div>

        <div className="App-section App-problem">
          <TrustProblemSection/>
        </div>
        

        {/* Frequently asked questions */}
        {/* <div className="App-section App-body-section" id="section-four">
          <FAQ/>
        </div> */}

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
