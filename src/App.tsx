import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import Header from './components/Header';
import SectionOneVideo from './videos/Liberata_Section_One.mp4';
import ReactPlayer from 'react-player/lazy';

function App() {
  const sectionOneRef = useRef(null);
  const [isSectionOnePlaying, setSectionOnePlaying] = useState(false);

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
          dolor sit amet, consectetur elit, sed do tempor incididunt ut labore. 
        </div>

        <div className="App-section">
          <ReactPlayer
            url={SectionOneVideo}
            playing={isSectionOnePlaying}
            autoPlay={true}
            controls={true}
            width="1000"
            height="500"
          ></ReactPlayer>
        </div>

        {/* Three problems */}
        <div className="App-section App-problem" id="section-two">
          <div className="App-problem-header sticky">Solving the merit problem - Eliminating corruption and politics within academia</div>
          <div className="App-problem-body">
            <div>
              dolor sit amet, consectetur elit, sed do tempor incididunt ut labore.
            </div>
            <div>

            </div>
          </div>
        </div>

        <div className="App-section App-problem">
          <div className="App-problem-header sticky">Solving the economic problem - Eliminating reward mismatch</div>
          <div className="App-problem-body">
            <div>
              dolor sit amet, consectetur elit, sed do tempor incididunt ut labore.
            </div>
            <div>

            </div>
          </div>
        </div>

        <div className="App-section App-problem">
          <div className="App-problem-header sticky">Solving the trust problem - Targeting the replication crisis</div>
          <div className="App-problem-body">
            <div>
              dolor sit amet, consectetur elit, sed do tempor incididunt ut labore.
            </div>
            <div>

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
