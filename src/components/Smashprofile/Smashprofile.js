import React from 'react';
import BBanjo from '../../assets/images/bbanjo.png';
import './Smashprofile.css';

function Smashprofile() {
  return (
    <div className='smashprofile-container'>
        <h1 className='myprofile-title'>My Profile</h1>
        <div className="smashprofile-subcontainer">
            <div className="main-container">
                <img src={ BBanjo } className='banjo-img' alt='BBanjo' />
            </div>
            <div className="smashdata-container">
                <a href="https://smashdata.gg/smash/5/player/MTorres29?id=1103167" className="smashdata-link">Player Database / MTorres29</a>
            </div>
        </div>
        
    </div>
  )
}

export default Smashprofile