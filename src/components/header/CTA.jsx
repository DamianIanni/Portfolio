import React from 'react';
import CV from '../../assets/cv.pdf';
import {LanguageContext} from '../../App'
import { useContext } from 'react';
import Languages from '../../langauges/Languages';

const CTA = () => {
  
  const language = useContext(LanguageContext)

  return (
    <div className="cta">
      <a href={CV} download className="btn">{language === "en" ? Languages.english.text_download : Languages.spanish.text_download}</a>
    </div>
  )
}

export default CTA