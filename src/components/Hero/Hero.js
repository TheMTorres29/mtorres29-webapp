import React from 'react';
import '../../App';
import './Hero.css';

const videoLinks = ["https://player.vimeo.com/video/819314703?h=e34632707f&background=1&autoplay=1&quality=720p",
                    "https://player.vimeo.com/video/819312432?h=df2ca32b36&background=1&autoplay=1&quality=720p"
                   ];

function getRandVideo(arr) {
  return arr[Math.floor(Math.random()*arr.length)];  
}

const selectedVideo = getRandVideo(videoLinks);

function Hero() {
  return (
    <div className='hero-container' id='home'>
        <div className='hero-video-container'>
          <iframe title="vimeo-player" src={selectedVideo} frameborder="0" className='hero-iframe'></iframe>
        </div>
        <div className='hero-text'>
          <h1>Miguel Torres</h1>
          <p>SoCal Web Developer / Banjo Main</p>
        </div>
        
    </div>
  )
}

export default Hero;