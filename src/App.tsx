import React, {useEffect, useState, useRef} from 'react';
import './App.css';
import Header from './components/Header';
// import SectionOneVideo from './videos/Liberata_Section_One.mp4';
import SectionOneVideo from './videos/Liberata_Section_One_White.mp4'
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  const [isMeritVideoOn, setMeritVideoOn] = useState(false);
  const [isEconomicVideoOn, setEconomicVideoOn] = useState(false);
  const [isTrustVideoOn, setTrustVideoOn] = useState(false);
  const videoRef = useRef(null);
  let shouldAutoplay = true;

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

  return (
    <div className="App">
      <div className="Header-accent"></div>
      <Header/>
      <div className="App-body">
        {/* Hook and overview */}
        <div className="App-section" id="section-one">
          Introducing Project Liberata. 
        </div>

        <div className="App-section App-body-section">
          <video ref={videoRef} src={SectionOneVideo} width="100%" 
          id="section-one-video"
          controls muted/>
        </div>

        {/* Three problems */}
        <div className="App-section App-body-section App-problem" id="section-two">
          <div className="App-problem-header sticky">
            Addressing the merit problem
          </div>
          <div className="App-problem-body">
            <div>
            Ending the politics of maneuvering for authorship positions
            </div>
            <div className="App-problem-button-carousel">
              <button className={isMeritVideoOn ? 'activeButton' : ''} onClick={() => setMeritVideoOn(true)}>Video</button>
              <button className={!isMeritVideoOn ? 'activeButton' : ''} onClick={() => setMeritVideoOn(false)}>Text Details</button>
            </div>
            <div>
              <div style={{display: isMeritVideoOn ? 'block' : 'none'}}>Video placeholder dolor sit amet, consectetur elit, sed do tempor incididunt ut labore. </div>
              <div style={{display: !isMeritVideoOn ? 'block' : 'none'}}>
                <p>
                The merit problem concerns how scientific contributions are recognized within academia.
                </p>
                <p>
                In the current system, an author’s position on a paper is imprecisely correlated to their contributions on that paper. For example, the first author position is typically considered disproportionally more prestigious than other positions regardless of other authors’ contributions. This system is prone to political maneuvering within labs and institutions as researchers compete for authorship positions. Additionally, there is no recognizable form of credit given to other key roles within the scientific process, such as to peer reviewers and study replicators.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="App-section App-body-section App-problem">
          <div className="App-problem-header sticky">Addressing the economic problem</div>
          <div className="App-problem-body">
            <div>
            Eliminating reward mismatch among the academic publishing community
            </div>
            <div className="App-problem-button-carousel">
              <button className={isEconomicVideoOn ? 'activeButton' : ''} onClick={() => setEconomicVideoOn(true)}>Video</button>
              <button className={!isEconomicVideoOn ? 'activeButton' : ''} onClick={() => setEconomicVideoOn(false)}>Text Details</button>
            </div>
            <div>
              <div style={{display: isEconomicVideoOn ? 'block' : 'none'}}>Video placeholder dolor sit amet, consectetur elit, sed do tempor incididunt ut labore. </div>
              <div style={{display: !isEconomicVideoOn ? 'block' : 'none'}}>
                <p>
                The economic problem concerns how the proceeds from a work of research is split up among the parties involved in the publishing process. After funding is secured, typically via taxpayer-backed government grants, a key mismatch arises: while researchers do most of the work, private publishing companies collect most of the revenue from publications through subscription and publishing fees.
                </p>
                <p>
                Though publishers’ fees are justified by their content curation, this service is still done by a volunteer-based peer review effort from academics that costs publishers very little. This system could be made more effective if fees could be eliminated while preserving quality. Current open-source publishing platforms have removed fees but haven't yet developed strong quality control mechanisms.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="App-section App-body-section App-problem">
          <div className="App-problem-header sticky">Addressing the trust problem</div>
          <div className="App-problem-body">
            <div>
            Paving the way for more reliable research by incentivizing the replication of scientific studies
            </div>
            <div className="App-problem-button-carousel">
              <button className={isTrustVideoOn ? 'activeButton' : ''} onClick={() => setTrustVideoOn(true)}>Video</button>
              <button className={!isTrustVideoOn ? 'activeButton' : ''} onClick={() => setTrustVideoOn(false)}>Text Details</button>
            </div>
            <div>
              <div style={{display: isTrustVideoOn ? 'block' : 'none'}}>Video placeholder dolor sit amet, consectetur elit, sed do tempor incididunt ut labore. </div>
              <div style={{display: !isTrustVideoOn ? 'block' : 'none'}}>
                  <p>
                  This section concerns how the body of scientific literature can be made more robust and reliable. At present, the vast majority of scientific findings are supported only by a single study, due to a lack of incentive for replication studies. Because of this, for most research fields, it can be difficult for later works to detect errors in preceding works. The ever increasing scale of academic research only exacerbates this issue and has noticeably affected public trust in science.

                  Solving this problem entails having a mechanism for incentivizing replication studies that is robust to collusion.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="App-section App-body-section" id="section-three">
          Introducing the shareholder model
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
