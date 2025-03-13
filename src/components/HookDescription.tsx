import React from 'react';
import './HookDescription.css';

function HookDescription() {
  return (
    <div className="HD-wrapper">
      <div className="HD-currently">
        <h2>
          Currently
        </h2>
        <p>
          Our existing academic review system is outdated and influenced by politics in places where it should be impartial.
        </p>
      </div>
      <div className="HD-liberata">
        <h2>
          Liberata's goal
        </h2>
        <p>
          To create a renewed system that fairly rewards all players in the research process — solving the merit, economic and trust issues of our current system.
        </p>
      </div>
    </div>
  );
}

export default HookDescription