import './MyMods.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import gwimcsp from '../../assets/images/smashmods/gwimcsp-preview.png';
import gwimcall from '../../assets/images/smashmods/gwimcall-preview.png';
import dbps from '../../assets/images/smashmods/db-preview.png'; 
import jelps from '../../assets/images/smashmods/jel-preview.png'; 

const MyMods = () => {
  const modGallery = [
    {
      icon: gwimcsp,
      link: 'https://drive.google.com/file/d/1ZzBwemJkTW-iTFCVbRGMIHSPWQHNtUJ_/view?usp=sharing',
      title: 'Gwimbly CSPs',
      desc: 'Luigi CSP for Gwimbly Mod by fireplace on GameBanana.com/mods/505374',
    },
    {
      icon: gwimcall,
      link: 'https://drive.google.com/file/d/1KIN81Uw3YCIvkM9PQYz-eNuvIWCZeLlI/view?usp=sharing',
      title: 'Gwimbly Announcer Call',
      desc: 'Generated with AI tool, edited with Audacity',
    },
    {
      icon: jelps,
      link: 'https://drive.google.com/file/d/1nQKDyPSOiRlmmir33bkp498iJElPwmil/view?usp=sharing',
      title: 'JEL E-Sports Stadium',
      desc: 'Pokemon Stadium 2 Mod: JEL E-Sports Reskin',
    },
    {
      icon: dbps,
      link: 'https://drive.google.com/file/d/1gq1VORA-1FgUI8rRGH1F4oGEPddY1Gmu/view?usp=sharing',
      title: 'DrewBees Stadium',
      desc: 'Pokemon Stadium 2 Mod: DrewBees Collectables Reskin',
    },
  ]

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className='mymods-container'>
        <h1 className='mymods-title'>My Smash Mods</h1>

        <div className="mod-modules">
          {
            modGallery.map((data, i) => 
                <div className="mod-modules-item" key={data.title} data-aos="flip-up">
                  <div className="mod-img-box">
                    <img className="mod-img" src={data.icon} alt='mod-preview'/>
                  </div>
                  <h2 className="mod-title">{data.title}</h2>
                  <Link to={data.link} component={data.component} className="mod-link">Click Here</Link>
                  <h3 className="mod-desc">{data.desc}</h3>
                </div>
              )
          }
        </div>
    </div>
  )
}

export default MyMods;