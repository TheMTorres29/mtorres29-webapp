import './Hero.css';
import starry2 from '../../assets/videos/StarfieldLoop.mp4';

function Hero() {
  return (
    <div className='hero-container' id='home'>
        <div className='hero-video-container'>
  
          <video
            src={starry2}
            type='video/mp4'
            autoPlay
            muted
            loop
            
            controls={false}
            playsInline={true}
            className='hero-video'>
          </video>
        </div>
        <div className='hero-text'>
          <h1>Miguel Torres</h1>
            <p>SoCal Web Developer</p>
        </div>
    </div>
  )
}

export default Hero;