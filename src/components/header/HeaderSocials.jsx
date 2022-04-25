import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
    <a href = "https://www.linkedin.com/in/iulian-leu-921266175/" target="_blank"><BsLinkedin /></a>
    <a href = "https://github.com/IulianLeu?tab=repositories" target="_blank"><BsGithub /></a>
    <a href = "https://www.instagram.com/iulian_dev/" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials;
