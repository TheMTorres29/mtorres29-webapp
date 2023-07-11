import React, { useState } from 'react';
import './smashstages.css';
import bf from '../../assets/images/stages/bf.png';
import sbf from '../../assets/images/stages/sbf.png';
import fd from '../../assets/images/stages/fd.png';
import ps2 from '../../assets/images/stages/ps2.png';
import sv from '../../assets/images/stages/sv.png';
import tc from '../../assets/images/stages/tc.png';
import k from '../../assets/images/stages/k.png';
import hb from '../../assets/images/stages/hb.png';
import nc from '../../assets/images/stages/nc.png';
import bfi from '../../assets/images/stages/icons/BattlefieldIconSSBU.png';
import sbfi from '../../assets/images/stages/icons/SmallBattlefieldIconSSBU.png';
import fdi from '../../assets/images/stages/icons/FinalDestinationIconSSBU.png';
import ps2i from '../../assets/images/stages/icons/PokemonStadium2IconSSBU.png';
import svi from '../../assets/images/stages/icons/SmashvilleIconSSBU.png';
import tci from '../../assets/images/stages/icons/TownandCityIconSSBU.png';
import ki from '../../assets/images/stages/icons/KalosPokemonLeagueIconSSBU.png';
import hbi from '../../assets/images/stages/icons/HollowBastionIconSSBU.png';
import nci from '../../assets/images/stages/icons/NorthernCaveIconSSBU.png';

function Smashstages() {
    const galleryStageImgs = [
        {
            icon: bfi,
            img: bf,
            title: "Battlefield"
        },
        {
            icon: sbfi,
            img: sbf,
            title: "Small Battlefield"
        },
        {
            icon: fdi,
            img: fd,
            title: "Final Destination"
        },
        {
            icon: ps2i,
            img: ps2,
            title: "Pokemon Stadium 2"
        },
        {
            icon: svi,
            img: sv,
            title: "Smashville"
        },
        {
            icon: tci,
            img: tc,
            title: "Town and City"
        },
        {
            icon: ki,
            img: k,
            title: "Kalos Pokemon League"
        },
        {
            icon: hbi,
            img: hb,
            title: "Hollow Bastion"
        },
        {
            icon: nci,
            img: nc,
            title: "Northern Cave"
        },
    ]

    const [galleryData, setGalleryData] = useState(galleryStageImgs[0]);
    const handleClick=(index)=> {
        // console.log(index);
        const gallery=galleryStageImgs[index];
        setGalleryData(gallery);
    };

  return (
    <div className='smashstages-container'>
        <div className="collapsable">
            <input type="checkbox" id="collapsable-head" />
            <label for="collapsable-head" className="smashstages-title">Competitive Stages</label>
            <div className="collapsable-content">
                <p>Here are some blastzone visualizations for some Competitive stages <br />
                Characters usually have preferences because certain stages blastzones help them get KOs quicker at lower %s <br />
                (I used tournameta.com to get these references. Shout out to them! Check them out for more in depth detail on Competitive stages)
                </p>
                <a href="https://tournameta.com/stage-comparison/" className="tsc-reference">
                    <h2>&lt; tournameta &gt;</h2>
                </a>

                <div className="stageimgs-container">
                    <div className="main-gallery">
                        <h2 className="main-gallery-title">{galleryData.title}</h2>
                        <img className="main-gallery-image" src={galleryData.img} />
                    </div>
                    <div className="gallery-icons">
                        {
                            galleryStageImgs.map((data,i) => 
                            <>
                                <div className="stageimg-item">
                                    <img className="stageimg-img" src={data.icon} onClick={()=>handleClick(i)} />
                                </div>
                            </>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Smashstages