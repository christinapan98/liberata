import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';
import XIcon from '@mui/icons-material/X';
import './Footer.css';

function Footer() {
  const linkedinUrl = "https://www.linkedin.com/company/liberata-academia/posts/?feedView=all";
  const youtubeUrl = "https://www.youtube.com/@liberata.academia";
  const instagramUrl = "https://www.instagram.com/liberata.official/";
  const redditUrl = "https://www.reddit.com/user/Liberata_Official/";
  const xUrl = "https://x.com/liberata2025?s=21";
  const facebookUrl = "";
  return (
    <div className="Footer-body">
      <div className="Footer-text-mediaIconLine">
        <a href={linkedinUrl} target="_blank" rel="noreferrer">
          <LinkedInIcon className="mediaIcon" fontSize="large"/>
        </a>
        <a href={youtubeUrl} target="_blank" rel="noreferrer">
          <YouTubeIcon className="mediaIcon" fontSize="large"/>
        </a>
        <a href={instagramUrl} target='_blank' rel='noreferrer'>
          <InstagramIcon className='mediaIcon' fontSize='large'/>
        </a>
        {/* <a href={facebookUrl} target='_blank' rel='noreferrer'>
          <FacebookIcon className='mediaIcon' fontSize='large'/>
        </a> */}
        <a href={redditUrl} target='_blank' rel='noreferrer'>
          <RedditIcon className='mediaIcon' fontSize='large'/>
        </a>
        <a href={xUrl} target='_blank' rel='noreferrer'>
          <XIcon className='mediaIcon' fontSize='large'/>
        </a>
      </div>
    </div>
  )
}

export default Footer