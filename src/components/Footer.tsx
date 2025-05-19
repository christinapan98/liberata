import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css';

function Footer() {
  const linkedinUrl = "https://www.linkedin.com/company/liberata-academia/posts/?feedView=all";
  const youtubeUrl = "https://www.youtube.com/@liberata.academia";
  
  return (
    <div className="Footer-body">
      <div className="Footer-text-mediaIconLine">
        <a href={linkedinUrl} target="_blank" rel="noreferrer">
          <LinkedInIcon className="mediaIcon" fontSize="large"/>
        </a>
        <a href={youtubeUrl} target="_blank" rel="noreferrer">
          <YouTubeIcon className="mediaIcon" fontSize="large"/>
        </a>
      </div>
    </div>
  )
}

export default Footer