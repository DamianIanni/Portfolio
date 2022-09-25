import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
// import ME from '../../assets/ME.jpeg';
import ME from '../../assets/yoyo.png'
import './intro.css';
import {LanguageContext} from '../../App'
import { useContext } from 'react';
import Languages from '../../langauges/Languages';

const Intro = () => {
  const language = useContext(LanguageContext)

  return (
    <section id="about">
      <h2>{language === "en" ? Languages.english.about_me : Languages.spanish.about_me}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div style={{height: 300}} className="about__me-image">
            <img src={ME} alt="me"  />
          </div>
        </div>
        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{language === "en" ? Languages.english.experience : Languages.spanish.experience}</h5>
              <small>1 {language === "en" ? Languages.english.experience_years : Languages.spanish.experience_years}</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5> {language === "en" ? Languages.english.projects : Languages.spanish.projects}</h5>
              <small>3+ {language === "en" ? Languages.english.completed_projects : Languages.spanish.completed_projects}</small>
            </article>
          </div> */}
          <p>{language === "en" ? Languages.english.description_1 : Languages.spanish.description_1}</p>
          <p>{language === "en" ? Languages.english.description_2 : Languages.spanish.description_2}</p>
          <p>{Languages.latin}</p>
        </div>
      </div>
    </section>
  )
}

export default Intro