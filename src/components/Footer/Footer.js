import './Footer.css';

function Footer({setIsModalOpen}) {

  return (
    <div className='footer-container'>
        <div className="row">
            {/* Column 1 */}
            <div className="col">
                <h4 className="footer-title">MTorres29.com</h4>
                <ul className="footer-list">
                    <li className="footer-item">
                        <h4>created by: Miguel Torres</h4>
                    </li>
                    <li className="footer-item">
                        <button className='footer-contact-btn' onClick={() => {setIsModalOpen(true);}}>
                            <h4>Contact Me</h4>
                            <img src='https://drive.google.com/thumbnail?id=1yyLC1WxwP_YKRzS60ByFwIutiYxACAcV&export=download' alt="logo-icon" className="footer-icon" />
                        </button>
                    </li>
                </ul>
            </div>

            {/* Column 2 */}
            <div className="col">
                <h4 className="footer-title">Work</h4>
                <ul className="footer-list">
                    <li className="footer-item">
                        <a href="https://www.linkedin.com/in/mtorres29/">
                            <h4>Linkedin</h4>
                            <img src='https://drive.google.com/thumbnail?id=1yXzFS32Aw1iY8u5Bk7Iea9vln1Ao2wzs&export=download' alt="logo-icon" className="footer-icon" />
                        </a>
                    </li>
                    <li className='footer-item'>
                        <a href="https://github.com/TheMTorres29">
                            <h4>GitHub</h4>
                            <img src='https://drive.google.com/thumbnail?id=1leZ2DxuUxx7-PVxjIsZUxM0pQc7ob9is&export=download' alt="logo-icon" className="footer-icon" />
                        </a>
                    </li>
                </ul>
            </div>

            {/* Column 3 */}
            <div className="col">
                <h4 className="footer-title">Social Media</h4>
                <ul className="footer-list">
                    <li className="footer-item">
                        <a href="https://twitter.com/TheMTorres29">
                            <h4>X</h4>
                            <img src='https://drive.google.com/thumbnail?id=15nP_vsWCqcvGdenLCdO5JfiNuZMQOxcW&export=download' alt="logo-icon" className="footer-icon" />
                        </a>
                        
                    </li>
                    <li className="footer-item">
                        <a href="https://www.twitch.tv/mtorres29">
                            <h4>Twitch</h4>
                            <img src='https://drive.google.com/thumbnail?id=1xPiw70TSklXtA7DmRysDoMHt_YVB4ZPE&export=download' alt="logo-icon" className="footer-icon" />
                        </a>
                        
                    </li>
                    
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer