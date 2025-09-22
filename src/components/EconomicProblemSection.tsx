import React, {useState} from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import economicImg from '../images/Economic Problem.png';
import "../App.css";

function EconomicProblemSection() {

  const [isEconomicContextVisible, setEconomicContextVisible] = useState(true);
  return (
    <>
      <div className="App-problem-header sticky">
        <div>Addressing the economic problem</div>
        <img src={economicImg}/>
        </div>
      <div className="App-problem-body">
        <div>
        Eliminating reward mismatch among the academic publishing community
        </div>
        <div className="App-problem-button-carousel">
          <button className={isEconomicContextVisible ? 'old-system-active-button' : ''} onClick={() => setEconomicContextVisible(true)}>Current System</button>
          <button className={!isEconomicContextVisible ? 'liberata-active-button' : ''} onClick={() => setEconomicContextVisible(false)}>Liberata</button>
        </div>
        <div>
          {
            isEconomicContextVisible ?
              <>
                <p>
                  The economic problem concerns how the proceeds from a work of research are distributed. While researchers do most of the work, private publishing companies collect most of the revenue from the work's publications through subscription and publishing fees.
                </p>
                <p>
                  Though publishers’ fees are justified by their content curation, this service is still done by a volunteer-based effort from academics. This system could be made more effective if fees were removed while preserving quality. Current open-source publishing platforms have removed fees but haven't developed strong quality control mechanisms yet.
                </p>
              </>
            :
              <>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '43vh'}}>
                  <p>
                    Liberata seeks to address these issues with an open-source publishing platform that eliminates fees while also providing quality control by incentivizing academics to review papers. This incentive comes within the form of shares given out for peer reviews, ensuring that reviewers of a work of research are recognized in addition to its authors.
                  </p>
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

export default EconomicProblemSection