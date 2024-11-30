import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import SectionOneVideo from './videos/Liberata_Section_One.mp4';
import ReactPlayer from 'react-player/lazy';

function App() {
  const [isMeritVideoOn, setMeritVideoOn] = useState(false);
  const [isEconomicVideoOn, setEconomicVideoOn] = useState(false);
  const [isTrustVideoOn, setTrustVideoOn] = useState(false);

  useEffect(() => {
    // Section observer
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
          dolor sit amet, consectetur elit, sed do tempor incididunt ut labore. 
        </div>

        <div className="App-section">
          <ReactPlayer
            url={SectionOneVideo}
            controls={true}
            width="1000"
            height="500"
            id="section-one-video"
          ></ReactPlayer>
        </div>

        {/* Three problems */}
        <div className="App-section App-problem" id="section-two">
          <div className="App-problem-header sticky">Solving the merit problem</div>
          <div className="App-problem-body">
            <div>
              Eliminating corruption and politics within academia
            </div>
            <div className="App-problem-button-carousel">
              <button className={isMeritVideoOn ? 'activeButton' : ''} onClick={() => setMeritVideoOn(true)}>Video</button>
              <button className={!isMeritVideoOn ? 'activeButton' : ''} onClick={() => setMeritVideoOn(false)}>Text Details</button>
            </div>
            <div>
              <div style={{display: isMeritVideoOn ? 'block' : 'none'}}>Video placeholder dolor sit amet, consectetur elit, sed do tempor incididunt ut labore. </div>
              <div style={{display: !isMeritVideoOn ? 'block' : 'none'}}>Text placeholder dolor sit amet, consectetur elit, sed do tempor incididunt ut labore. </div>
            </div>
          </div>
        </div>

        <div className="App-section App-problem">
          <div className="App-problem-header sticky">Solving the economic problem</div>
          <div className="App-problem-body">
            <div>
              Eliminating reward mismatch
            </div>
            <div className="App-problem-button-carousel">
              <button className={isEconomicVideoOn ? 'activeButton' : ''} onClick={() => setEconomicVideoOn(true)}>Video</button>
              <button className={!isEconomicVideoOn ? 'activeButton' : ''} onClick={() => setEconomicVideoOn(false)}>Text Details</button>
            </div>
            <div>
              <div style={{display: isEconomicVideoOn ? 'block' : 'none'}}>Video placeholder dolor sit amet, consectetur elit, sed do tempor incididunt ut labore. </div>
              <div style={{display: !isEconomicVideoOn ? 'block' : 'none'}}>Text placeholder dolor sit amet, consectetur elit, sed do tempor incididunt ut labore. </div>
            </div>
          </div>
        </div>

        <div className="App-section App-problem">
          <div className="App-problem-header sticky">Solving the trust problem</div>
          <div className="App-problem-body">
            <div>
              Targeting the replication crisis
            </div>
            <div className="App-problem-button-carousel">
              <button className={isTrustVideoOn ? 'activeButton' : ''} onClick={() => setTrustVideoOn(true)}>Video</button>
              <button className={!isTrustVideoOn ? 'activeButton' : ''} onClick={() => setTrustVideoOn(false)}>Text Details</button>
            </div>
            <div>
              <div style={{display: isTrustVideoOn ? 'block' : 'none'}}>Video placeholder dolor sit amet, consectetur elit, sed do tempor incididunt ut labore. </div>
              <div style={{display: !isTrustVideoOn ? 'block' : 'none'}}>Text placeholder dolor sit amet, consectetur elit, sed do tempor incididunt ut labore. </div>
            </div>
          </div>
        </div>

        <div className="App-section" id="section-three">
          Video Playlist
        </div>
        <div className="App-section" id="section-four">
          FAQ
        </div>
      </div>
    </div>
  );
}

export default App;
