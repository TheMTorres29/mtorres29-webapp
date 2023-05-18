import React from 'react';
import './Aboutme.css'

function Aboutme() {
  return (
    <div className='about-container' id='about'>
        <h1 className='about-title'>About Me</h1>
        <div className="about-description">
            <p>
              &emsp; Hello to who views this,
              As you probably saw from the Hero my name is Miguel Torres and I am a CSUSB grad studying some web development and playing Super Smash Bros Ultimate for the Nintendo Switch. <br />
              &emsp; I started really getting into tech and computers around middle school.
              What really peaked my interest was my Nintendo Wii at the time. Homebrew was new and people were gaining access to different mods and really taking the console to the next level and I wanted to learn more!<br />
              &emsp; I began modding a lot of my game consoles by opening them up and putting them back together to swap the shell to be a different color, getting some cool music or texture packs running in my game.
              It was all so cool and is something that still peaks my interest to this day. I began to study Computer Science in college because I wanted to learn how a computer works and what all of this "coding" I see and hear is about.<br />
              &emsp; The subject really did grow on me and I love learning new things about computer programming. After graduating I am still learning and teaching myself new skills to prepare myself for a career in the tech field.
              I have worked with a lot of hardware coming from a background of building my own arcade stick for fighting games, tinkering with game consoles and working with huge printers at Zumiez; however the software side is really
              what I WANT to learn more about for now for now.<br />
              &emsp; This project is here to serve as Web Development practice. I bought the domain and now I have this hub of any work I am up to.
              I plan on posting and updating this site when I find the time between work, life, and hobbies.
              I also plan on posting some Smash related content here when I can just to practice web dev stuff as well so stay tuned!
            </p>
        </div>
        <h1 className='timeline-title'>Timeline</h1>
        <div className="timeline">
          <ul className='timeline-list'>
            <li className='timeline-card left'>
              <div className="timeline-contents">
                <h2 className='timeline-card-title'>Corona High School</h2>
                <h2 className="timeline-card-date">2014</h2>
                <p className="timeline-card-desc">
                  Graduated with the plans to study Computer Science or Engineering
                </p>
              </div>
            </li>
            <li className='timeline-card right'>
              <div className="timeline-contents">
                <h2 className='timeline-card-title'>Superior Grocers</h2>
                <h2 className="timeline-card-date">2014-2015</h2>
                <p className="timeline-card-desc">
                  Position: Sales Associate<br />
                  I started as a cart pusher and I eventually got promoted to work inside.
                  I took in palettes of food, stocked shelves, took inventory, delegated tasks for a small team, and assisted shoppers on the floor.
                </p>
              </div>
            </li>
            <li className='timeline-card left'>
              <div className="timeline-contents">
                <h2 className='timeline-card-title'>Norco Community College</h2>
                <h2 className="timeline-card-date">2014-2018</h2>
                <p className="timeline-card-desc">
                  Received my Associates of Math and Science
                </p>
              </div>
            </li>
            <li className='timeline-card right'>
              <div className="timeline-contents">
                <h2 className='timeline-card-title'>CBC</h2>
                <h2 className="timeline-card-date">2015-present</h2>
                <p className="timeline-card-desc">
                  Position: IT/Help Desk<br />
                  I began working here on the weekends while I studied in college.
                  The work I have done for this included: setting up new office computers / cameras with the correct softwares needed to work, troubleshoot internet issues, troubleshoot with printers and other office devices,
                  set up excel sheets to help track data easier, combine files like pdf's / videos / other file types,
                  graphic design work, and helped keep track of expenses for one business.
                </p>
              </div>
            </li>
            <li className='timeline-card left'>
              <div className="timeline-contents">
                <h2 className='timeline-card-title'>California State University, San Bernardino</h2>
                <h2 className="timeline-card-date">2018-2022</h2>
                <p className="timeline-card-desc">
                Received my Bachelor of Science in Computer Science w/ a cumulative GPA of 3.135
                </p>
              </div>
            </li>
            <li className='timeline-card right'>
              <div className="timeline-contents">
                <h2 className='timeline-card-title'>GameStop</h2>
                <h2 className="timeline-card-date">2020-2021</h2>
                <p className="timeline-card-desc">
                  Position: Senior Game Advisor<br />
                  I was hired on as 'Senior Game Advisor' whose tasks included: opening/closing the store, counting and dropping off money at the bank,
                  delegating tasks for the day for a small team, assisting guests on the floor, taking in shipments, taking inventory, and stocking the shelves.
                </p>
              </div>
            </li>
            <li className='timeline-card left'>
              <div className="timeline-contents">
                <h2 className='timeline-card-title'>Zumiez DTG</h2>
                <h2 className="timeline-card-date">2022-present</h2>
                <p className="timeline-card-desc">
                  Position: Operator / Technician<br />
                  I was hired on as an operator for the DTG department but gained soft-training and knowledge from the support technicians we had there at the time to help keep the printers running.
                  My role here was to operate and maintain the Kornit Atlas Max printers we had to print designs on apparel.
                  My tasks included: operating the machines, cleaning the print heads, quality control for the apparel, trained new hires on how to run and maintain the printers.
                </p>
              </div>
            </li>
          </ul>
          
        </div>
    </div>
  )
}

export default Aboutme