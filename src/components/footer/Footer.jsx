import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import {  BsInstagram  } from 'react-icons/bs'
import {LanguageContext} from '../../App'
import { useContext } from 'react';
import Languages from '../../langauges/Languages';

import './footer.css';

const Footer = () => {

  const language = useContext(LanguageContext)

  return (
    <footer id='Footer'>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">{language === "en" ? Languages.english.about_me : Languages.spanish.about_me}</a></li>
        <li><a href="#experience">{language === "en" ? Languages.english.skills : Languages.spanish.skills}</a></li>
        <li><a href="#portfolio">{language === "en" ? Languages.english.portfolio : Languages.spanish.portfolio}</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/damian-ianni-b50555205/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/DamianIanni" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href='https://www.instagram.com/damian.ia2/' target="_blank" rel="noreferrer" ><BsInstagram/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; {language === "en" ? Languages.english.rigths_reserved : Languages.spanish.rigths_reserved}</small>
      </div>
    </footer>
  )
}

export default Footer