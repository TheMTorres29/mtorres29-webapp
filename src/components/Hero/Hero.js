import React from 'react';
import '../../App';
import './Hero.css';
// import BanjoHero from '../../assets/videos/InkyBanjoHero.mp4';

function Hero() {
  return (
    <div className='hero-container'>
        {/* <video src={ BanjoHero } autoPlay loop /> */}
        <div className='video-container'>
          <iframe src="https://www.youtube.com/embed/o0oZmlrdOz8?controls=0&autoplay=1&mute=1&playsinline=1&playlist=o0oZmlrdOz8&loop=1&hd=1" title='yt-iframe' className='hero-iframe'></iframe>
        </div>
        <div className='hero-text'>
          <h1>Miguel Torres</h1>
          <p>SoCal Web Developer | Banjo Main</p>
        </div>
        
    </div>
  )
}

export default Hero;