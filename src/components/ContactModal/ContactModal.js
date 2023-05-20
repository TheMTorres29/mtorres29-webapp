import { React } from 'react';
import './ContactModal.css';

function ContactModal({ setIsModalOpen }) {

  return (
    <div className='contact-modal-container'>
        <div className="outer-modal">
            <div className="inner-modal">
                <button className="close-modal" onClick={() => setIsModalOpen(false)}>X</button>
                <h1 className="contact-modal-title">Contact Me</h1>
                <h2>[WIP] Doesnt work YET</h2>
                <form className='contact-form'>
                    <div className="form-container">
                        <input type="text" className="form-control" placeholder="Name" name="name" required/>
                    </div>
                    <div className="form-container">
                        <input type="email" className="form-control" placeholder="Email Address" name="email" required/>
                    </div>
                    <div className="form-container">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" required/>
                    </div>
                    <div className="form-container">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message..." name="message" required></textarea>
                    </div>
                    <div className="form-container">
                        <button type="submit" className="">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
        

    </div>
  )
}

export default ContactModal