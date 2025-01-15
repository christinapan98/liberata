import React, {useState} from 'react';
import SectionOneVideo from '../videos/Liberata_Section_One_White.mp4';
import "./VideoPlaylist.css";

function VideoPlaylist() {
  return (
    <>
      <h1 className="Video-header">Video Playlist</h1>
      <div className="Video-body">
          <video 
            src={SectionOneVideo} 
            width="60%"
            controls muted
          />
          <div className="Video-body-description">
            <h2>
              Video title
            </h2>
            <div>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </div>
          </div>
      </div>
    </>
  )
}

export default VideoPlaylist