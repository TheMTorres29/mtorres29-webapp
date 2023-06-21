import React from 'react';
import './smashstages.css'
import bf from '../../assets/images/stages/bf.png';
import sbf from '../../assets/images/stages/sbf.png';
import fd from '../../assets/images/stages/fd.png';
import ps2 from '../../assets/images/stages/ps2.png';
import sv from '../../assets/images/stages/sv.png';
import tc from '../../assets/images/stages/tc.png';
import k from '../../assets/images/stages/k.png';
import hb from '../../assets/images/stages/hb.png';
import nc from '../../assets/images/stages/nc.png';
import lc from '../../assets/images/stages/lc.png';
import ys from '../../assets/images/stages/ys.png';


function smashstages() {
    const enlargeImg = () => {
        
        console.log("logged");
    }

  return (
    <div className='smashstages-container'>
        <h1 className="smashstages-title">Competitive Stages</h1>
        <p>Here are some blastzone visualizations for some Competitive stages <br />
            Characters usually have preferences because certain stages blastzones help them get KOs quicker at lower %s <br />
            (I used tournameta.com to get these references. Shout out to them! Check them out for more in depth detail on Competitive stages)
        </p>
        <a href="https://tournameta.com/stage-comparison/" className="tsc-reference">
            <h2>&lt; tournameta &gt;</h2>
        </a>
        <div className="stageimgs-container">
            <div className="image-card" onClick={ enlargeImg } >
                <h3 className='smash-stage-title'>Battlefield</h3>
                <img src={ bf } alt="smash-stage-img" className="stage-img" />
            </div>
            <div className="image-card" onClick={ enlargeImg } >
                <h3 className='smash-stage-title'>Small Battlefield</h3>
                <img src={ sbf } alt="smash-stage-img" className="stage-img" />
            </div>
            <div className="image-card" onClick={ enlargeImg } >
                <h3 className='smash-stage-title'>Final Destination</h3>
                <img src={ fd } alt="smash-stage-img" className="stage-img" />
            </div>
            <div className="image-card" onClick={ enlargeImg } >
                <h3 className='smash-stage-title'>Pokemon Stadium 2</h3>
                <img src={ ps2 } alt="smash-stage-img" className="stage-img" />
            </div>
            <div className="image-card" onClick={ enlargeImg } >
                <h3 className='smash-stage-title'>Smashville</h3>
                <img src={ sv } alt="smash-stage-img" className="stage-img" />
            </div>
            <div className="image-card" onClick={ enlargeImg } >
                <h3 className='smash-stage-title'>Town and City</h3>
                <img src={ tc } alt="smash-stage-img" className="stage-img" />
            </div>
            <div className="image-card" onClick={ enlargeImg } >
                <h3 className='smash-stage-title'>Kalos Pokemon League</h3>
                <img src={ k } alt="smash-stage-img" className="stage-img" />
            </div>
            <div className="image-card" onClick={ enlargeImg } >
                <h3 className='smash-stage-title'>Hollow Bastion</h3>
                <img src={ hb } alt="smash-stage-img" className="stage-img" />
            </div>
            <div className="image-card" onClick={ enlargeImg } >
                <h3 className='smash-stage-title'>Northern Cave</h3>
                <img src={ nc } alt="smash-stage-img" className="stage-img" />
            </div>
            <div className="image-card" onClick={ enlargeImg } >
                <h3 className='smash-stage-title'>Lylat Cruise</h3>
                <img src={ lc } alt="smash-stage-img" className="stage-img" />
            </div>
            <div className="image-card" onClick={ enlargeImg } >
                <h3 className='smash-stage-title'>Yoshi's Story</h3>
                <img src={ ys } alt="smash-stage-img" className="stage-img" />
            </div>
        </div>
    </div>
  )
}

export default smashstages