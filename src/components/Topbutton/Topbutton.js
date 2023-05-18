import React, { useState } from 'react';
import './Topbutton.css';
import upArrow from '../../assets/images/uparrow.svg';

function Topbutton() {
    const [isVisible, setVisible] = useState(false);
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true);
      } 
      else if (scrolled <= 300) {
        setVisible(false);
      }
    };

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

  return (
    <div className='backtotop-container'>
        <img src={upArrow} alt='upBtn' className="backtotop-btn" onClick={scrollToTop} style={{display: isVisible ? 'inline' : 'none'}}/>
    </div>
  )
}

export default Topbutton