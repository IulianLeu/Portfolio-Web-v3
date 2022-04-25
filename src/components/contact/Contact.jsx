import React from 'react';
import './contact.css';
import {FiMail} from 'react-icons/fi';
import {FaFacebookMessenger} from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'


const Contact = () => {
{/*emailjs*/}  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_n3cjd15', 'template_pmzjj0b', form.current, 'kIPk9x48WrKnREol7')
      e.target.reset();

}; {/*emailjs*/}
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <FiMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>iulian.leu95@gmail.com</h5>
            <a href="mailto:iulian.leu95@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>IulianLeu</h5>
            <a href="https://m.me/id=100074949144649" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WatsApp</h4>
            <h5>-- -- --</h5>
            <a href="https://wa.me/+37367130526" target="_blank">Send a message</a>
          </article>

        </div>
        {/*END OF CONTACT OPTIONS*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required> </textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
};

export default Contact;
