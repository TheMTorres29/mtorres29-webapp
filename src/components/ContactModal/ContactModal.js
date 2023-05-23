import { React, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactModal.css';

function ContactModal({ setIsModalOpen }) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_37lzreg', 'template_dyo2k8j', form.current, 'kLIqezveESqfmlKjx')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          setIsModalOpen(false);
    };
  return (
    <div className='contact-modal-container'>
        <div className="outer-modal">
            <div className="inner-modal">
                <h1 className="contact-modal-title">Contact Me</h1>
                <form className='contact-form' ref={form} onSubmit={sendEmail}>
                    <div className="form-container">
                        <h2 className="form-title">Full Name</h2>
                        <input type="text" className="form-control" placeholder="Name" name="name" required/>
                    </div>
                    <div className="form-container">
                        <h2 className="form-title">Email Address</h2>
                        <input type="email" className="form-control" placeholder="Email Address" name="email" required/>
                    </div>
                    <div className="form-container">
                        <h2 className="form-title">Subject</h2>
                        <input type="text" className="form-control" placeholder="Subject" name="subject" required/>
                    </div>
                    <div className="form-container">
                        <h2 className="form-title">Message</h2>
                        <textarea className="form-control" cols="30" rows="10" placeholder="Your message..." name="message" required></textarea>
                    </div>
                    <div className="form-container">
                        <button type="submit" className="contact-send-btn">Send Message</button>
                    </div>
                </form>
                <button className="close-modal" onClick={() => setIsModalOpen(false)}>X</button>
            </div>
        </div>
        

    </div>
  )
}

export default ContactModal