import React, { useState } from 'react';
import './Smashvods.css';


function Smashvods() {
    const videoGallery = [
        {
            img: '',
            title: 'ITTD #57: 1MFG Skill (CFalcon) vs MTorres29 (Banjo)',
            source: 'https://www.youtube.com/embed/_XKTgwmi8Og',
        },
        {
            img: '',
            title: 'GLS Jabroni Jamboree 3: MTorres29 (Banjo) vs Piston (Roy)',
            source: 'https://www.youtube.com/embed/SNRI8HDgPD4',
        },
        {
            img: '',
            title: 'GLS Jabroni Jamboree 3: MTorres29 (Banjo/MK) vs Piston (Roy)',
            source: 'https://www.youtube.com/embed/RdQFG95JCDc',
        },
        {
            img: '',
            title: 'GLS Jabroni Jamboree 3: MTorres29 (Banjo) vs SlimJam (Zelda)',
            source: 'https://www.youtube.com/embed/vi9sNFOkyVE',
        },
        {
            img: '',
            title: 'JV3 2022 Crew Battle: Los Lecheros vs Super Jelly Nova Gang',
            source: 'https://www.youtube.com/embed/dIGwlR1oERA',
        },
        {
            img: '',
            title: 'ITTD #18: Yan (Jigglypuff) vs MTorres29 (Banjo)',
            source: 'https://www.youtube.com/embed/8fVxU3cHGdw',
        },
        {
            img: '',
            title: 'GLS Jabroni Jamboree: Piston (Roy) vs MTorres29 (Banjo)',
            source: 'https://www.youtube.com/embed/xVsCC1g1jQA',
        },
    ];

    const [ytgalleryData, setYTGalleryData] = useState(videoGallery[0]);
    const handleClick=(index)=> {
        // console.log(index);
        const gallery=videoGallery[index];
        setYTGalleryData(gallery);
    };

  return (
    <div className='smashvods-container'>
        <h1 className="smashvod-title">Smash Vods</h1>
        <div className="yt-video-gallery">
            <div className="yt-video-container">
                <div className="video-container">
                    <iframe className='yt-video-iframe' width="560" height="315" src={ytgalleryData.source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <h1 className="video-title">{ytgalleryData.title}</h1>
            </div>
            <div className="vod-list-container">
                {
                    videoGallery.map((data,i) => 
                    <>
                        <div className="vod-list-item">
                            <h3 className="vod-selection" alt='vod-icon' src={data.img} onClick={()=>handleClick(i)}>{data.title}</h3>
                        </div>
                    </>)
                }
                <h3 className="vod-soon">more soon</h3>
            </div>
        </div>
    </div>
  )
}

export default Smashvods