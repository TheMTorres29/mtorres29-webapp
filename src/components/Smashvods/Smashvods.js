import React from 'react';
import './Smashvods.css';

import testthumbnail from '../../assets/images/vods/testhumbnail.png';
import playicon from '../../assets/images/play.svg';

function Smashvods() {
    const videoThumbnails = document.querySelectorAll(
        ".yt-gallery-container .yt-gallery .yt-thumbnail"
    );
    const videoPlayer = document.querySelector(
        ".yt-video-iframe" 
    );

    const videoTitle = document.querySelector(
        ".yt-title"
    );

    const showVideo = (videoId, title) => {
        let videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
        videoPlayer.setAttribute("src", videoUrl);
        videoTitle.innerHTML = title;
    };

    videoThumbnails.forEach((v) => {
        v.addEventListener("click", () => {
            showVideo(v.dataset.id, v.dataset.title);
            console.log("clicked test");
        });
    });

  return (
    <div className='smashvods-container'>
        <h1 className="smashvod-title">Smash Vods</h1>

        <div className="yt-gallery-container">
            <div className="yt-video">
                <iframe className='yt-video-iframe'
                    width="560"
                    height="315" 
                    src="https://www.youtube.com/embed/SNRI8HDgPD4"
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                    ></iframe>
                
            </div>
            <h3 className='yt-title'>Title test</h3>

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
        </div>
        
        
    </div>
  )
}

export default Smashvods