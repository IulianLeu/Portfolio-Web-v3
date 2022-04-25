import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>iuliandev</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/iulian-leu-921266175/"><BsLinkedin /></a>
        <a href="https://github.com/IulianLeu?tab=repositories"><BsGithub /></a>
        <a href="https://www.instagram.com/iulian_dev/"><BsInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorial inspired. Made by "iuliandev"</small>
      </div>
    </footer>
  )
}

export default Footer;
