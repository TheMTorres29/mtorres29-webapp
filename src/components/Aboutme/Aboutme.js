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
              Tech has always piqued my interest so I’ve dabbled in both software and hardware. This is a place where I 
              can showcase both of those things. 
              The purpose of this project is to serve as a portfolio and help me practice web development using ReactJS.
              <br />idk I think coding is cool and fun lol
              <br />
              <br />
              &emsp; Now for Smash... I’ve always played Smash Bros since the 64 casually with my family and friends having a good ol time.
              but I started going to local tournaments for Smash Ultimate. This is the first time I have really gotten into a video game 
              competitively and I gotta say the experience is really fun and helps you learn a lot. Im proud to say I am 
              one of the few Banjo mains in SoCal so I try to represent as much as I can lol I plan on sharing some Smash 
              related stuff on this site just for fun so stay tuned!
              <br />I have also been thinking of getting into other fighting games so stay tuned for that as well. Thank you for reading ^.^
            </p>
        </div>
    </div>
  )
}

export default Aboutme