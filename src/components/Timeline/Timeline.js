import React from 'react';
import './Timeline.css';
import chs from '../../assets/images/timeline/chs.png';
import sg from '../../assets/images/timeline/sg.png';
import ncc from '../../assets/images/timeline/ncc.png';
import lc from '../../assets/images/timeline/lc.png';
import gs from '../../assets/images/timeline/gs.png';
import csusb from '../../assets/images/timeline/csusb.png';
import z from '../../assets/images/timeline/z.png';


function Timeline() {
  return (
    <div className='timeline-container'>
        <h1 className="timeline-title">Timeline</h1>
        <div className="timeline">
            <div className="timeline-item left-container">
                <img src={ chs } alt="company-logo" />
                <div className="timeline-contents">
                    <h2 className='timeline-item-title'>Corona High School</h2>
                    <h3 className='timeline-item-date'>2014</h3>
                    <p className='timeline-item-desc'></p>
                    <span className="left-arrow"></span>
                </div>
            </div>
            <div className="timeline-item right-container">
                <img src={ sg } alt="company-logo" />
                <div className="timeline-contents">
                    <h2 className='timeline-item-title'>Superior Grocers</h2>
                    <h3 className='timeline-item-date'>Aug 2014 - Jan 2015</h3>
                    <p className='timeline-item-desc'>Sales Associate</p>
                    <span className="right-arrow"></span>
                </div>
            </div>
            <div className="timeline-item left-container">
                <img src={ ncc } alt="company-logo" />
                <div className="timeline-contents">
                    <h2 className='timeline-item-title'>Norco Community College</h2>
                    <h3 className='timeline-item-date'>2014 - 2018</h3>
                    <p className='timeline-item-desc'>Associates of Math and Science</p>
                    <span className="left-arrow"></span>
                </div>
            </div>
            <div className="timeline-item right-container">
                <img src={ lc } alt="company-logo" />
                <div className="timeline-contents">
                    <h2 className='timeline-item-title'>La Cenaduria</h2>
                    <h3 className='timeline-item-date'>Jan 2015 - present</h3>
                    <p className='timeline-item-desc'>IT Technician</p>
                    <span className="right-arrow"></span>
                </div>
            </div>
            <div className="timeline-item left-container">
            <img src={ csusb } alt="company-logo" />
                <div className="timeline-contents">
                    <h2 className='timeline-item-title'>Cal State University San Bernardino</h2>
                    <h3 className='timeline-item-date'>2018 - 2022</h3>
                    <p className='timeline-item-desc'>Bachelor of Science in Computer Science w/ a cumulative GPA of 3.14</p>
                    <span className="left-arrow"></span>
                </div>
            </div>
            <div className="timeline-item right-container">
                <img src={ gs } alt="company-logo" />
                <div className="timeline-contents">
                    <h2 className='timeline-item-title'>GameStop</h2>
                    <h3 className='timeline-item-date'>Oct 2020 - May 2021</h3>
                    <p className='timeline-item-desc'>Senior Game Advisor</p>
                    <span className="right-arrow"></span>
                </div>
            </div>
            <div className="timeline-item left-container">
                <img src={ z } alt="company-logo" />
                <div className="timeline-contents">
                    <h2 className='timeline-item-title'>Zumiez DTG</h2>
                    <h3 className='timeline-item-date'>2022 - present</h3>
                    <p className='timeline-item-desc'>Operator/Technician</p>
                    <span className="left-arrow"></span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Timeline