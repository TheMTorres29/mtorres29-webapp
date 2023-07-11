import React, { useState } from 'react';
import './ProjectsSection.css';
import gitLogo from '../../assets/images/github-mark-white.svg';
import mti from '../../assets/images/projects/MT29WebApp-Icon.png';
import tpi from '../../assets/images/projects/TMAGame-Icon.png';
import yti from '../../assets/images/projects/YTMP3-Icon.png';

function ProjectsSection() {
  const projectGallery = [
    {
      icon: mti,
      link: 'https://MTorres29.com',
      title: 'MTorres29 Web App',
      desc: 'This website is one of my recent projects.',
    },
    {
      icon: tpi,
      link: 'https://github.com/TheMTorres29/TropaMagicaGameBuild/releases',
      title: 'Tropa Magica Game v.5',
      desc: 'First Unity game O built for Game Design course.',
    },
    {
      icon: yti,
      link: 'https://github.com/TheMTorres29/YT-MP3Downloader/releases/tag/YT-MP3',
      title: 'YT-MP3Downloader v.5',
      desc: 'YouTube to MP3 Downloader I made using Python.',
    },
    {
      icon: '',
      link: '',
      title: 'Custom Fightstick',
      desc: 'Custom universal fightstick I built to use when I play fighting games.',
    },
  ]

  return (
    <div className='projects-container'>
        <h1 className="projectsection-title">Projects</h1>
        <div className="git-container">
          <a href="https://github.com/TheMTorres29" className="git-link">
            <img src={ gitLogo } alt="GitHub" className="git-logo" />
          </a>
          <h3 className="git-desc">My GitHub</h3>
        </div>
        
        <div className="project-modules">
          {
            projectGallery.map((data,i) => 
              <>
                <div className="project-modules-item">
                  <div className="proj-img-box">
                    <img className="proj-img" src={data.icon} />
                  </div>
                  <h2 className="proj-title">{data.title}</h2>
                  <a href={data.link} className="proj-link">Click Here</a>
                  <h3 className="proj-desc">{data.desc}</h3>
                </div>
              </>)
          }
        </div>
    </div>
  )
}

export default ProjectsSection