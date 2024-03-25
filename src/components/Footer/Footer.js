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
                            <img src='https://img.icons8.com/ios-filled/50/message-squared.png' alt="logo-icon" className="footer-icon" />
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
                            <img src='https://img.icons8.com/ios-filled/50/linkedin.png' alt="logo-icon" className="footer-icon" />
                        </a>
                    </li>
                    <li className='footer-item'>
                        <a href="https://github.com/TheMTorres29">
                            <h4>GitHub</h4>
                            <img src='https://icons8.com/icon/62856/github' alt="logo-icon" className="footer-icon" />
                        </a>
                    </li>
                </ul>
            </div>

            {/* Column 3 */}
            <div className="col">
                <h4 className="footer-title">Social Media</h4>
                <ul className="footer-list">
                    <li className="footer-item">
                        <a href="https://www.twitch.tv/mtorres29">
                            <h4>Twitch</h4>
                            <img src='https://img.icons8.com/ios-filled/50/twitch.png' alt="logo-icon" className="footer-icon" />
                        </a>
                        
                    </li>
                    
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer