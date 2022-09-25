import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import {LanguageContext} from '../../App'
import { useContext, useState } from 'react';
import Languages from '../../langauges/Languages';



const Header = () => {

  const language = useContext(LanguageContext)

  const styles = {
    display: 'flex',
    marginLeft: 900,
    // paddingTop: 300
  }

  return (
    <header id="home">
      <div className="container header__container">
        <h5>{language === "en" ? Languages.english.text_hello : Languages.spanish.text_hello }</h5>
        <h1>Damian Ianni</h1>
        <h5 className="text-light">{language === "en" ? Languages.english.dev : Languages.spanish.dev }</h5>
        {/* <CTA /> */}
      </div>
    </header>
  );
};

export default Header;
