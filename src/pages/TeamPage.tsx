import React, {useState, useEffect, useRef} from 'react';
import Header from '../components/Header';
import Hook from '../components/Hook';
import TeamImage from '../components/TeamImage';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import '../App.css';

function TeamPage() {
    const introRef = useRef(null);
    const overlayRef = useRef(null);
    const contactRef = useRef(null);

    const MISSION_TEXT = "To democratize an academic review system influenced by politics";
    const TYPING_SPEED = 25;
    const [displayedText, setDisplayedText] = useState("");
    const textRef = useRef(null);
    const [hasTypingStarted, setHasTypingStarted] = useState(false);

    const leadershipTeam = [
         {name: "Han Zhang", 
          role: "Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",
          },
         {name: "Patrick Prochazka", 
          role: "Co-Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",},
          {name: "Han Zhang", 
          role: "Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",
          },
         {name: "Patrick Prochazka", 
          role: "Co-Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",},
                   {name: "Patrick Prochazka", 
          role: "Co-Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",},
          {name: "Han Zhang", 
          role: "Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",
          },
         {name: "Patrick Prochazka", 
          role: "Co-Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",},
          {name: "Han Zhang", 
          role: "Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",
          },
         {name: "Patrick Prochazka", 
          role: "Co-Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",},
          {name: "Han Zhang", 
          role: "Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",
          },
         {name: "Patrick Prochazka", 
          role: "Co-Founder",
          bio: "It is a long established fact that a reader will be  ",},
    ]
    const productTeam = [
         {name: "Han Zhang", 
          role: "Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",
          },
         {name: "Patrick Prochazka", 
          role: "Co-Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",},
          {name: "Han Zhang", 
          role: "Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",
          },
         {name: "Patrick Prochazka", 
          role: "Co-Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",},
          {name: "Han Zhang", 
          role: "Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",
          },
         {name: "Patrick Prochazka", 
          role: "Co-Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",},
          {name: "Han Zhang", 
          role: "Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",
          },
         {name: "Patrick Prochazka", 
          role: "Co-Founder",
          bio: "It is a long established fact that a reader will be  ",},
                   {name: "Patrick Prochazka", 
          role: "Co-Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",},
          {name: "Han Zhang", 
          role: "Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",
          },
         {name: "Patrick Prochazka", 
          role: "Co-Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",},
          {name: "Han Zhang", 
          role: "Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",
          },
         {name: "Patrick Prochazka", 
          role: "Co-Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",},
          {name: "Han Zhang", 
          role: "Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",
          },
         {name: "Patrick Prochazka", 
          role: "Co-Founder",
          bio: "It is a long established fact that a reader will be  ",},

    ]
    const businessTeam = [
         {name: "Han Zhang", 
          role: "Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",
          },
         {name: "Patrick Prochazka", 
          role: "Co-Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",},
          {name: "Han Zhang", 
          role: "Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",
          },
         {name: "Patrick Prochazka", 
          role: "Co-Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",},
                   {name: "Patrick Prochazka", 
          role: "Co-Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",},
          {name: "Han Zhang", 
          role: "Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",
          },
         {name: "Patrick Prochazka", 
          role: "Co-Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",},
          {name: "Han Zhang", 
          role: "Founder",
          bio: "It is a long established fact that a reader will be distracted by the readable content ",
          },
    ]


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

// // Set up another observer to highlight the current section in the right nav bar
//   useEffect(() => {
//     const leadershipSection = document.getElementById("Team-leadership");
//     const productSection = document.getElementById("Team-product");
//     const businessSection = document.getElementById("Team-business");

//     let prev: any;
//     const observerOptions = {
//       root: null,
//       threshold: 0.6, // only trigger when 60% of section is visible
//     };
//     const observerCallback = (entries: any[]) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           if (prev) {
//             prev.classList.remove('section-active');
//           }
//           switch (entry.target.id) {
//             case "Team-leadership":
//               if (leadershipSection) {
//                 leadershipSection.classList.add('section-active');
//                 prev = leadershipSection;
//               }
//               break;
//             case "Team-product":
//               if (productSection) {
//                 productSection.classList.add('section-active');
//                 prev = productSection;
//               }
//               break;
//             case "Team-business":
//               if (businessSection) {
//                 businessSection.classList.add('section-active');
//                 prev = businessSection;
//               }
//               break;
//             default:
//               if (prev) {
//                 prev.classList.remove('section-active');
//               }
//               break;
//           }
//         }
//       });
//     };
//     const observer = new IntersectionObserver(observerCallback, observerOptions);
//     leadershipSection && observer.observe(leadershipSection);
//     productSection && observer.observe(productSection);
//     businessSection && observer.observe(businessSection);
//     return () => observer.disconnect();
//   }, []);


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

    return(
        <div className="App">
            <div className="App-intro" ref={introRef} id="intro">
                {/* Page header */}
                <Header/>
                <div className="App-section" id="section-hook">
                <Hook
                    header = "Meet our team"
                    subheader = "[Tagline detailing affiliation with Duke University’s Bass Connections program]"
                    subtext = "An interdisciplinary team of innovators with experience at institutions such as Duke, Google, Autodesk and Neuralink."
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
                        <div className="App-section App-col-left-section">
                            <TeamImage
                                id="Team-leadership"
                                title="/Leadership"
                                tagline='Tagline introducing the leadership team, which also includes advisors.'
                                members={leadershipTeam}
                                useCarousel = {true}
                                itemsPerSlide={3}
                            />
                        </div>
                        <div className="App-section App-col-left-section">
                            <TeamImage
                                id="Team-product"
                                title="/Product"
                                tagline='Tagline introducing the product team, which also includes engineers and designers.'
                                members={productTeam}
                                useCarousel = {true}
                                itemsPerSlide={3}
                            />
                        </div>
                        <div className="App-section App-col-left-section">
                            <TeamImage
                                id="Team-business"
                                title="/Bussiness"
                                tagline='Tagline introducing the business / marketing team.'
                                members={businessTeam}
                                useCarousel = {true}
                                itemsPerSlide={3}
                            />
                        </div>
                    </div>

                <div className="App-column-right">
                    <a href="#Team-leadership" id="Team-leadership">Leadership</a>
                    <a href="#Team-product" id="Team-product">Product</a>
                    <a href="#Team-business" id="Team-business">Business</a>
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
export default TeamPage;