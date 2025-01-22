import React, {useState} from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "../App.css";

function EconomicProblemSection() {

  const [isEconomicContextVisible, setEconomicContextVisible] = useState(true);
  return (
    <>
      <div className="App-problem-header sticky">Addressing the economic problem</div>
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
                  The economic problem concerns how the proceeds from a work of research is split up among the parties involved in the publishing process. After funding is secured, a key mismatch arises: while researchers do most of the work, private publishing companies collect most of the revenue through subscription and publishing fees.
                </p>
                <p>
                  Though publishers’ fees are justified by their content curation, this service is still done by a volunteer-based peer review effort from academics that costs publishers very little. This system could be made more effective if fees could be eliminated while preserving quality. Current open-source publishing platforms have removed fees but haven't yet developed strong quality control mechanisms.
                </p>
              </>
            :
              <>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '43vh'}}>
                  <p>
                    Liberata seeks to address these issues with an open-source publishing platform that eliminates fees while also providing quality control by incentivizing academics to review papers within the platform. This incentive comes within the form of shares given out for peer reviews, ensuring that reviewers of a work of research are recognized in addition to its authors.
                  </p>
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

export default EconomicProblemSection