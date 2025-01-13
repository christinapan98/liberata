import React, {useEffect, useRef} from 'react';
import './App.css';
import Header from './components/Header';
import SectionOneVideo from './videos/Liberata_Section_One_White.mp4'
import Hook from './components/Hook';
import MeritProblemSection from './components/MeritProblemSection';
import EconomicProblemSection from './components/EconomicProblemSection';
import TrustProblemSection from './components/TrustProblemSection';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  const videoRef = useRef(null);
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

  return (
    <div className="App">
      <div className="Header-accent"></div>
      <Header/>

      <div className="App-body">
        {/* Hook and overview */}
        <div className="App-section" id="section-one">
          <Hook/>
        </div>

        <div className="App-section App-body-section">
          <video ref={videoRef} src={SectionOneVideo} width="100%" 
          id="section-one-video"
          controls muted/>
        </div>

        {/* Three problems */}
        <div className="App-section App-body-section App-problem" id="section-two">
         <MeritProblemSection/>
        </div>

        <div className="App-section App-body-section App-problem">
          <EconomicProblemSection/>
        </div>

        <div className="App-section App-body-section App-problem">
          <TrustProblemSection/>
        </div>

        {/* How it works */}
        <div className="App-section App-body-section" id="section-three">
          How it works - Introducing the shareholder model
        </div>

        {/* Comprehensive video playlist */}
        <div className="App-section App-body-section" id="section-four">
          Video playlist
        </div>

        <div className="App-section" style={{height: '50vh'}}>
          <Contact/>
        </div>
      </div>

      <Footer/>
      <div className="Footer-accent"></div>
    </div>
  );
}

export default App;
