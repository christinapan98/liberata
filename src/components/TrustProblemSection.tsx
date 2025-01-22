import React, {useState} from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "../App.css";

function TrustProblemSection() {
  const [isTrustContextVisible, setTrustContextVisible] = useState(true);
  return (
    <>
      <div className="App-problem-header sticky">Addressing the trust problem</div>
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
                This section concerns how the body of scientific literature can be made more robust and reliable. 
              </p>
              <p>
                At present, the vast majority of scientific findings are supported only by a single study, due to a lack of incentive for replication studies. Because of this, for most research fields, it can be difficult for later works to detect errors in preceding works. The ever increasing scale of academic research only exacerbates this issue and has noticeably affected public trust in science.
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
                <a href="#section-three" style={{display: 'flex', alignItems: 'center', gap: '5px', alignSelf: 'flex-end', paddingRight: '3.5vw', textDecoration: 'underline', color: 'black'}}>
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