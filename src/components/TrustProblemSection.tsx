import React, {useState} from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import trustImg from '../images/Trust Problem.png';
import "../App.css";

function TrustProblemSection() {
  const [isTrustContextVisible, setTrustContextVisible] = useState(true);
  return (
    <>
      <div className="App-problem-header sticky">
        <div>Addressing the trust problem</div>
        <img src={trustImg}/>
      </div>
      <div className="App-problem-body">
        <div>
          Paving the way for more reliable research by incentivizing the replication of scientific studies
        </div>
        <div className="App-problem-button-carousel">
          <button className={isTrustContextVisible ? 'old-system-active-button' : ''} onClick={() => setTrustContextVisible(true)}>Current System</button>
          <button className={!isTrustContextVisible ? 'liberata-active-button' : ''} onClick={() => setTrustContextVisible(false)}>Liberata</button>
        </div>
        <div>
          {
            isTrustContextVisible ?
            <>
              <p>
                This section concerns how the body of scientific literature can be made more reliable. 
              </p>
              <p>
                Currently, most scientific findings are supported by only one study, due to a lack of incentive for researchers to replicate them. Because of this, it can be difficult for later works to detect errors in preceding works. This can lead to serious issues where latent errors negatively affect public policy, healthcare, and infrastructure decisions until the error is spotted and the publication corrected or retracted. The ever increasing scale of academic research only exacerbates this issue and has noticeably affected public trust in science.
              </p>
              <p>
                Solving this problem entails having a mechanism for incentivizing replication studies that is robust to collusion.
              </p>
            </>
            :
            <>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', minHeight: '43vh'}}>
                <div>
                  Liberata solves these problems by allotting shares to replicators of a study as well as to its authors and reviewers. This way, academics can also gain credit by duplicating an existing study, rather than only through the publication of a new one.
                </div>
                <a href="https://docs.google.com/document/d/15CcvTbmist-dSgsto2hurLP8hjlUe7t6fq_C2MGNNJo/edit?usp=sharing" target="blank" style={{display: 'flex', alignItems: 'center', gap: '5px', alignSelf: 'flex-end', paddingRight: '3.5vw', textDecoration: 'underline', color: 'black'}}>
                  <span>Learn more</span>
                  <ArrowForwardIcon/>
                </a>
              </div>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default TrustProblemSection