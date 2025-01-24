import React from 'react';
import OrigamiBird from '../images/OrigamiBird.png';
import "./Hook.css";

function Hook() {
  return (
    <div className="Hook-wrapper">
      <div>
        <div className="Hook-header" style={{fontWeight: '500'}}>
          Introducing Liberata.
        </div>
        <div className="Hook-subheader">
          Open source academic publishing with incentivized peer review and replications
        </div>
      </div>
      <img src={OrigamiBird}/>
    </div>
  )
}

export default Hook