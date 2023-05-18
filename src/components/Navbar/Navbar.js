import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // Fixes Button from popping up after refresh
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({behavior: 'smooth'});
  };

  const homeClickMe = () => {
    closeMobileMenu();
  }

  const aboutClickMe = () => {
    scrollToAbout();
    closeMobileMenu();
  }

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={homeClickMe}>MTorres29</Link>
                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className="nav-item">
                    <Link to='/' className='nav-links' onClick={homeClickMe}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/' className='nav-links' onClick={aboutClickMe}>
                      About Me
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/smash-bros' className='nav-links' onClick={closeMobileMenu}>
                      Smash Bros
                    </Link>
                  </li>
                  {button && <Button buttonStyle='btn--outline'>Contact</Button>}
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar;