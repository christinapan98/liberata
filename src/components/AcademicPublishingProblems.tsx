import React, { useState,useEffect, useRef } from "react";
import "./AcademicPublishingProblems.css";

function AcademicPublishingProblems(){
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
            heading: "1.  Paper Written",
            text: "When a paper is written, authorship positions are the only way to recognize contributions to the paper, but these only show ordinal positioning of contributions, not relative contribution sizes. "
        },
        {
            heading: "2.  Paper Submitted",
            text: "When a paper is submitted, often there is publishing fees, which is a rent-seeking problem for all taxpayers and academics."
        },
        {
            heading: "3.  Peer Review",
            text: "When a paper goes through peer review, the peer reviewers are at best, incentivized to get the job done, not to do the job well, leading to bad experiences with peer reviewers, and also poor quality control overall from peer review."
        },
        {
            heading: "4.  Paper Published",
            text: "When the paper is published, authors often lose the distribution rights to their work, leading to a scenario where taxpayer funded work is \"owned\" by private journal companies."
        },
        {
            heading: "5.  Paper Read",
            text: "When the paper is read, there are often subscription fees. This is another rent-seeking problem for all taxpayers and academics."
        },
        {
            heading: "6.  Replication",
            text: "There is no incentive for replication studies today, leading to almost all research findings backed up by only one study, conducted by graduate students in a hurry to publish. At the same time, mini replications are often done and never recorded by researchers building off prior work for their own projects."
        }
    ]

    const next = () => setActiveIndex((prev) => (prev + 1) % items.length);
    const prev = () => setActiveIndex((p) => (p - 1 + items.length) % items.length);

    const getCardClass = (index) => {
        const diff = index - activeIndex;
        const absDiff = Math.abs(diff);
        
        if (absDiff === 0) return 'carousel-card-active';
        if (diff === 1 || diff === -(items.length - 1)) return 'carousel-card-right';
        if (diff === -1 || diff === items.length - 1) return 'carousel-card-left';
        return 'carousel-card-hidden';
    };

    return (
        <div className="carousel-3d-container">
            <img src={require('../images/AcademicProblems.png')} className="problem-img"/>
            <div className="carousel-3d-viewport">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`carousel-card ${getCardClass(index)}`}
                        onClick={() => {
                            if (index !== activeIndex) {
                                setActiveIndex(index);
                            }
                        }}
                    >
                        <h3 className="carousel-card-heading">{item.heading}</h3>
                        <p className="carousel-card-text">{item.text}</p>
                    </div>
                ))}
            </div>

            <div className="carousel-nav-buttons">
                <button onClick={prev} className="carousel-btn">
                    ←
                </button>
                <button onClick={next} className="carousel-btn">
                    →
                </button>
            </div>

            <div className="carousel-dots">
                {items.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`carousel-dot ${activeIndex === index ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
}
export default AcademicPublishingProblems;


