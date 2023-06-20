import React from 'react';
import "./ProjectsSection.css";
import gitLogo from "../../assets/images/github-mark-white.svg";

function ProjectsSection() {
  return (
    <div className='projects-container'>
        <h1 className="projectsection-title">Projects Section</h1>
        <a href="https://github.com/TheMTorres29" className="git-link">
          <img src={ gitLogo } alt="GitHub" className="git-logo" />
        </a>
        <p className="projectsection-desc">Stylized Page Coming Soon</p>
    </div>
  )
}

export default ProjectsSection