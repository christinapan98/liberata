import React, {useState} from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import meritImg from '../images/Merit Problem.png';
import '../App.css';

function MeritProblemSection() {
  const [isMeritContextVisible, setMeritContextVisible] = useState(true);

  return (
    <>
      <div className="App-problem-header sticky">
        <div>Addressing the merit problem</div>
        <img src={meritImg}/>
      </div>
      <div className="App-problem-body">
        <div>
        Ending the politics of maneuvering for authorship positions
        </div>
        <div className="App-problem-button-carousel">
          <button className={isMeritContextVisible ? 'old-system-active-button' : ''} onClick={() => setMeritContextVisible(true)}>Current System</button>
          <button className={!isMeritContextVisible ? 'liberata-active-button' : ''} onClick={() => setMeritContextVisible(false)}>Liberata</button>
        </div>
        <div>
          {
            isMeritContextVisible ? 
            <>
              <p>
              The merit problem concerns how scientific contributions are recognized within academia.
              </p>
              <p>
              In the current system, an author’s position on a paper is imprecisely correlated to their contributions on that paper. For example, the first author position is typically considered disproportionally more prestigious than other positions regardless of other authors’ contributions. This system is prone to political maneuvering within labs and institutions as researchers compete for authorship positions. Additionally, there is no recognizable form of credit given to other key roles within the scientific process, such as peer reviewers and study replicators.
              </p>
            </>
              :
            <>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '43vh'}}>
                <p>
                  Liberata seeks to address these issues by introducing a shareholder model within its platform where credit is distributed as quantifiable shares of a whole. In contrast to the traditional authorship model, where contributions are hard to determine and subject to politics, Liberata’s shareholder model ensures that contributions of every author are fairly recognized.
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

export default MeritProblemSection;