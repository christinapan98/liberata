import React from 'react';
import "./Hook.css";

type HookProps = {
  header: string;
  subheader: string;
  subtext? :string
}

function Hook({header, subheader, subtext}:HookProps) {
  return (
    <div className="Hook-wrapper">
      <div style={{width: '83vw', marginTop: '13vh'}}>
        <div className="Hook-header">
          {header}
        </div>
        {/* subtext below header */}
        {subtext && <div className="Hook-subtext">{subtext}</div>}

        <div style={{width: 'inherit', display: 'flex', justifyContent: 'end', marginTop: '6vh'}}>
          <div className="Hook-subheader">
            {subheader}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hook