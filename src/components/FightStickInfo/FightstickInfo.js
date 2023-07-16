import React from 'react';
import './FightstickInfo.css';
import fsimg1 from '../../assets/images/projects/stickpics/spagettiFR.png';
import fsimg2 from '../../assets/images/projects/stickpics/spagettiBK.png';
import fsimg3 from '../../assets/images/projects/stickpics/spagettiTP.png';
import fsimg4 from '../../assets/images/projects/stickpics/spagettiTPBK.png';
import fsimg5 from '../../assets/images/projects/stickpics/newFR.png';
import fsimg6 from '../../assets/images/projects/stickpics/newBK.png';
import fsimg7 from '../../assets/images/projects/stickpics/brookuboard.png';
import fsimg8 from '../../assets/images/projects/stickpics/stickmanual.png';
import fsimg9 from '../../assets/images/projects/stickpics/sticklayout.png';

const FightstickInfo = () => {
  return (
    <div className='fightstickinfo-container'>
        <h1 className='fightstickinfo-title'>My Fightstick</h1>
        <h3 className='fightstickinfo-subtitle'>The Idea</h3>
        <div className="fightstickinfo-box">
            <p className="fightstickinfo-desc">
                Fighting games have always been one of my favorite genres of video games. <br/>
                So much that it inspired me to recreate that classic arcade feel at home with my own custom fightstick. <br/>
                But where do I begin? I was mostly playing games on my Nintendo Switch so my first version was built around that console. <br/>
            </p>
        </div>
        <h3 className='fightstickinfo-subtitle'>First Build</h3>
        <div className="fightstickinfo-box">
            <p className="fightstickinfo-desc">
                My first build began with me buying a third-party Switch controller to open up and modify. I believe it was a HORI controller. <br/>
                I used the board as my fightstick board and soldered wires from the board to some Sanwa arcade stick buttons and placed them into a custom built
                fightstick housing shell I got online. <br/>
                It worked great but I knew I can make this better. The spagetti wire kind of bugged me too lol
            </p>
            <div className="fightstickinfo-img-container">
                <img src={fsimg1} alt="" className="fightstickinfo-img" />
                <img src={fsimg2} alt="" className="fightstickinfo-img" />
                <img src={fsimg3} alt="" className="fightstickinfo-img" />
                <img src={fsimg4} alt="" className="fightstickinfo-img" />
            </div>
        </div>
        <h3 className='fightstickinfo-subtitle'>Current Build</h3>
        <div className="fightstickinfo-box">
            <p className="fightstickinfo-desc">
                I did some research and discovered the Brook Universal Fightboard. This would make my fightstick work universally on Playstation, Xbox, PC, and Nintendo Switch systems! <br/>
                As I installed the new board I also cleaned up and organized the wires making it look neater inside the housing shell. <br/>
                The button layout I use the most is the Pokken Tournament Pro Pad controller layout for Nintendo Switch. 
            </p>
            <div className="fightstickinfo-img-container">
                <img src={fsimg5} alt="" className="fightstickinfo-img" />
                <img src={fsimg6} alt="" className="fightstickinfo-img" />
            </div>
            <div className="fightstickinfo-img-container">
                <img src={fsimg7} alt="" className="fightstickinfo-img" />
                <img src={fsimg9} alt="" className="fightstickinfo-img" />
                <img src={fsimg8} alt="" className="fightstickinfo-img" />  
            </div>
        </div>
    </div>
  )
}

export default FightstickInfo