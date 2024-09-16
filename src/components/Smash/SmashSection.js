import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Aos from 'aos'
import './SmashSection.css'
import sMods from '../../assets/images/smash/mods-icon.png'
import sProf from '../../assets/images/smash/statsrecords-icon.png'
import sStage from '../../assets/images/smash/stages-icon.png'
import sVods from '../../assets/images/smash/vods-icon.png'
import Smashstages from '../Smashstages/smashstages'
import Smashvods from '../Smashvods/Smashvods'
import MyMods from '../Mymods/MyMods'
// import stoneBack from '../../assets/images/stoneback.jpg'


const SmashSection = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
  return (
    <div className='smash-section-container'>
        <h1 className="smash-section-title">Smash Section</h1>

        <div className="smash-links-container">
            <div className='smash-link' data-aos="flip-up">
                <Link to={'https://smashdata.gg/smash/5/player/MTorres29?id=1103167'} className="link-container">
                    <img src={sProf} alt="" className='smash-link-img' />
                    <h2 className='smash-link-title'>Profile / Records</h2>
                </Link>
            </div>
            <div className='smash-link' data-aos="flip-up">
                <Link to={'smash-stages'} component={ Smashstages } className="link-container">
                    <img src={sStage} alt="" className='smash-link-img' />
                    <h2 className='smash-link-title'>Competitive Stages</h2>
                </Link>
            </div>
            <div className='smash-link' data-aos="flip-up">
                <Link to={'smash-vods'} component={ Smashvods } className="link-container">
                    <img src={sVods} alt="" className='smash-link-img' />
                    <h2 className='smash-link-title'>Vods</h2>
                </Link>
            </div>
            <div className='smash-link' data-aos="flip-up">
                <Link to={'smash-mods'} component={ MyMods } className="link-container">
                    <img src={sMods} alt="" className='smash-link-img' />
                    <h2 className='smash-link-title'>Mods</h2>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SmashSection