import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header';

function App() {
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
        <div className="App-section" id="section-one">
          dolor sit amet, consectetur elit, sed do tempor incididunt ut labore. 
        </div>
        <div className="App-section" id="section-two">
          Section 2
        </div>
        <div className="App-section" id="section-three">
          Section 3
        </div>
        <div className="App-section" id="section-four">
          Section 4
        </div>
      </div>
    </div>
  );
}

export default App;
