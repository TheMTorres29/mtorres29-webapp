import React from 'react';
import './Smashvods.css';

import testthumbnail from '../../assets/images/vods/testhumbnail.png';
import playicon from '../../assets/images/play.svg';


function Smashvods() {

    const testClick = () => {
        console.log("test click");
    };

  return (
    <div className='smashvods-container'>
        <h1 className="smashvod-title">Smash Vods</h1>

        <div className="vod-container">
            <h1 className="video-title">GLS Jabroni Jamboree 3: MTorres29 (Banjo) vs Piston (Roy) LQF</h1>
            <div className="video-container">
                <iframe className='yt-video-iframe' width="560" height="315" src="https://www.youtube.com/embed/SNRI8HDgPD4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>

        <div className="vod-container">
            <h1 className="video-title">GLS Jabroni Jamboree 3: MTorres29 (Banjo/MK) vs Piston (Roy) WQF</h1>
            <div className="video-container">
                <iframe className='yt-video-iframe' width="560" height="315" src="https://www.youtube.com/embed/RdQFG95JCDc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>

        <div className="vod-container">
            <h1 className="video-title">GLS Jabroni Jamboree 3: MTorres29 (Banjo) vs SlimJam (Zelda)</h1>
            <div className="video-container">
                <iframe className='yt-video-iframe' width="560" height="315" src="https://www.youtube.com/embed/vi9sNFOkyVE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>

        <div className="vod-container">
            <h1 className="video-title">JV3 2022 Crew Battle: Los Lecheros vs Super Jelly Nova Gang</h1>
            <div className="video-container">
                <iframe className='yt-video-iframe' width="560" height="315" src="https://www.youtube.com/embed/dIGwlR1oERA" title="JV3 2022 Crew battle Los Lecheros vs SuperJellyNovaGang" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        <div className="vod-container">
            <h1 className="video-title">ITTD #18: Yan (Jigglypuff) MTorres29 (Banjo)</h1>
            <div className="video-container">
                <iframe className='yt-video-iframe' width="560" height="315" src="https://www.youtube.com/embed/8fVxU3cHGdw" title="It&#39;s Time to Duel #18 Yan (Jigglypuff) vs MTorres29 (Banjo) Winners Round 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        <div className="vod-container">
            <h1 className="video-title">GLS Jabroni Jamboree: Piston (Roy) vs MTorres29 (Banjo)</h1>
            <div className="video-container">
                <iframe className='yt-video-iframe' width="560" height="315" src="https://www.youtube.com/embed/xVsCC1g1jQA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>


        {/* <div className="yt-gallery-container">
            <div className="yt-video">
                <iframe className='yt-video-iframe'
                    width="560"
                    height="315" 
                    src="https://www.youtube.com/embed/SNRI8HDgPD4"
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                    ></iframe>
            </div>
            <h3 className='yt-title'>SmashVod TestTitle</h3>

            <div className="yt-gallery">
                <div className="gallery-item">
                    <img className='yt-thumbnail' src={testthumbnail} alt="yt-img"
                    data-id='SNRI8HDgPD4'
                    data-title="GLS Jabroni Jamboree 3: MTorres29 (Banjo) vs Piston (Roy) LQF"/>
                    <div className="play-icon">
                        <img src={ playicon } alt="play-icon-img" className="play-icon-img" />
                    </div>
                </div>
                
                <div className="gallery-item">
                    <img className='yt-thumbnail' src={testthumbnail} alt="yt-img"
                    data-id='RdQFG95JCDc'
                    data-title="GLS Jabroni Jamboree 3: MTorres29 (Banjo/MK) vs Piston (Roy) WQF"/>
                    <div className="play-icon">
                        <img src={ playicon } alt="play-icon-img" className="play-icon-img" />
                    </div>
                </div>

                <div className="gallery-item">
                    <img className='yt-thumbnail' src={testthumbnail} alt="yt-img"
                    data-id='vi9sNFOkyVE' 
                    data-title="GLS Jabroni Jamboree 3: MTorres29 (Banjo) vs SlimJam (Zelda)"/>
                    <div className="play-icon">
                        <img src={ playicon } alt="play-icon-img" className="play-icon-img" />
                    </div>
                </div>

                <div className="gallery-item">
                    <img className='yt-thumbnail' src={testthumbnail} alt="yt-img" 
                    data-id='dIGwlR1oERA' 
                    data-title="JV3 2022 Crew Battle Los Lecheros vs SuperJellyNovaGang"/>
                    <div className="play-icon">
                        <img src={ playicon } alt="play-icon-img" className="play-icon-img" />
                    </div>
                </div>

                <div className="gallery-item">
                    <img className='yt-thumbnail' src={testthumbnail} alt="yt-img" 
                    data-id='8fVxU3cHGdw' 
                    data-title="ITTD #18 Yan (Jigglypuff) vs MTorres29 (Banjo)"/>
                    <div className="play-icon">
                        <img src={ playicon } alt="play-icon-img" className="play-icon-img" />
                    </div>
                </div>

                <div className="gallery-item">
                    <img className='yt-thumbnail' src={testthumbnail} alt="yt-img" 
                    data-id='xVsCC1g1jQA' 
                    data-title="GameLab-Smash Jabroni Jamboree: Piston (Roy) Vs MTorres29 (Banjo)"/>
                    <div className="play-icon">
                        <img src={ playicon } alt="play-icon-img" className="play-icon-img" />
                    </div>
                </div>

            </div>
        </div> */}
    </div>
  )
}

export default Smashvods