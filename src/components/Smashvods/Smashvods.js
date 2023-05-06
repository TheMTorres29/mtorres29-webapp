import React from 'react';
import './Smashvods.css';

function Smashvods() {
  return (
    <div className='smashvods-container'>
        <h1 className="smashvod-title">Smash Vods</h1>
        
        <div className="vod-container">
            <h1 className="video-title">GLS Jabroni Jamboree 3: MTorres29 (Banjo) vs Piston (Roy) LQF</h1>
            <div className="video-container">
                <iframe className='yt-video-iframe' width="560" height="315" src="https://www.youtube.com/embed/LZ7Mau5IaOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>

        <div className="vod-container">
            <h1 className="video-title">GLS Jabroni Jamboree 3: MTorres29 (Banjo/MK) vs Piston (Roy) WQF</h1>
            <div className="video-container">
                <iframe className='yt-video-iframe' width="560" height="315" src="https://www.youtube.com/embed/RdQFG95JCDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        
        <div className="vod-container">
            <h1 className="video-title">GLS Jabroni Jamboree 3: MTorres29 (Banjo) vs SlimJam (Zelda)</h1>
            <div className="video-container">
                <iframe className='yt-video-iframe' width="560" height="315" src="https://www.youtube.com/embed/vi9sNFOkyVE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        
        <div className="vod-container">
            <h1 className="video-title">JV3 2022 Crew Battle: Los Lecheros vs SuperJellyNovaGang</h1>
            <div className="video-container">
                <iframe className='yt-video-iframe' width="560" height="315" src="https://www.youtube.com/embed/dIGwlR1oERA" title="JV3 2022 Crew battle Los Lecheros vs SuperJellyNovaGang" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        
        <div className="vod-container">
            <h1 className="video-title">ITTD #18: Yan (Jigglypuff) MTorres29 (Banjo)</h1>
            <div className="video-container">
                <iframe className='yt-video-iframe' width="560" height="315" src="https://www.youtube.com/embed/8fVxU3cHGdw" title="It&#39;s Time to Duel #18 Yan (Jigglypuff) vs MTorres29 (Banjo) Winners Round 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        
        <div className="vod-container">
            <h1 className="video-title">GLS Jabroni Jamboree: Piston (Roy) vs MTorres29 (Banjo)</h1>
            <div className="video-container">
                <iframe className='yt-video-iframe' width="560" height="315" src="https://www.youtube.com/embed/xVsCC1g1jQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        
    </div>
  )
}

export default Smashvods