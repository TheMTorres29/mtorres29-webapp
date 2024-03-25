import { useEffect } from 'react';
import Aos from 'aos';
import './ProjectsSection.css';
import gitLogo from '../../assets/images/github-mark-white.svg';
import { Link } from 'react-router-dom';
import fightstickPage from '../../pages/Fightstick.js';


function ProjectsSection() {
  const projectGallery = [
    {
      icon: 'https://drive.google.com/thumbnail?id=1wU-jPVm9WqBKH4HIWlF9uiSqDPAqjeOR&export=download',
      link: 'https://random-smashdown.site',
      title: 'Random-Smashdown',
      desc: 'Fighter Randomizer for Super Smash Bros Ultimate',
    },
    {
      icon: 'https://drive.google.com/thumbnail?id=1i6Pb2SYeFOuiehyGQXEx6IpEs3919xzv&export=download',
      link: 'https://github.com/TheMTorres29/TropaMagicaGameBuild/releases',
      title: 'Tropa Magica Game v.5',
      desc: 'First Unity game I built for Game Design course.',
    },
    {
      icon: 'https://drive.google.com/thumbnail?id=1tMvN7JdBXRBa6wUGAa2zryRMHHb0VTle&export=download',
      link: 'https://github.com/TheMTorres29/YT-MP3Downloader/releases/tag/YT-MP3',
      title: 'YT-MP3Downloader v.5',
      desc: 'YouTube to MP3 Downloader I made using Python.',
    },
    {
      icon: 'https://drive.google.com/thumbnail?id=1MgjusYrMT7GXVgv4bxvEzBdw5YFoIp8o&export=download',
      link: 'fightstick',
      component: { fightstickPage },
      title: 'Custom Fightstick',
      desc: 'Custom universal fightstick I built to use when I play fighting games.',
    },
  ]

  useEffect(() => {
    Aos.init({duration: 1000});
}, []);

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
            projectGallery.map((data, i) => 
                <div className="project-modules-item" key={data.title} data-aos="flip-up">
                  <div className="proj-img-box">
                    <img className="proj-img" src={data.icon} alt='proj-preview'/>
                  </div>
                  <h2 className="proj-title">{data.title}</h2>
                  <Link to={data.link} component={data.component} className="proj-link">Click Here</Link>
                  <h3 className="proj-desc">{data.desc}</h3>
                </div>
              )
          }
        </div>
    </div>
  )
}

export default ProjectsSection