import React from 'react';
import './Aboutme.css'

function Aboutme() {
  return (
    <div className='about-container' id='about'>
        <h1 className='about-title'>About Me</h1>
        <div className="about-description">
            <h3 className="hello">Hello, my name is Miguel Torres</h3>
            <p>
              &emsp; I recently graduated from Cal State University San Bernardino with a Bachelors in Computer Science. 
              Tech has always piqued my interest so I’ve dabbled in both software and hardware. 
              The purpose of this project is to serve as a portfolio and help me practice web development using ReactJS. 
              <br />
              <br />
              &emsp; I’ve always played Smash Bros since the 64 casually with my friends and family but I recently started 
              going to local tournaments for Smash Ultimate. This is the first time I have really gotten into a video game 
              competitively and I gotta say the experience is really fun and helps you learn a lot. Im proud to say I am 
              one of the few Banjo mains in SoCal so I try to represent as much as I can lol I plan on sharing some Smash 
              related info / guides on this site just for fun so stay tuned!
            </p>
        </div>
    </div>
  )
}

export default Aboutme