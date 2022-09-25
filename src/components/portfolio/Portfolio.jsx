import React from 'react';
import IMG1 from '../../assets/bookstore.png';
import IMG2 from '../../assets/todo.png';
import IMG4 from '../../assets/fake.png';
import DAD from '../../assets/DAD.png';
import {LanguageContext} from '../../App'
import { useContext } from 'react';
import Languages from '../../langauges/Languages';

import './portfolio.css';

const Portfolio = () => {

  const language = useContext(LanguageContext)
  const p1description = language === "en" ? Languages.english.p1_description : Languages.spanish.p1_description
  const p2description = language === "en" ? Languages.english.p2_description : Languages.spanish.p2_description
  const p3description = language === "en" ? Languages.english.p3_description : Languages.spanish.p3_description
  const p4description = language === "en" ? Languages.english.p4_description : Languages.spanish.p4_description
  const soloProjects = [
    {
      id: 1,
      title: 'Garnet Admin',
      img: IMG1,
      description: p1description,
      technologies: 'React | React-Bootstrap | JavaScript',
      link: 'https://melodic-boba-111583.netlify.app/',
      github: 'https://github.com/Meri-MG/bookstore---react',
    },
    {
      id: 2,
      title: 'Garnet Control Plus',
      img: IMG4,
      description: p2description,
      technologies: 'React | React-Bootstrap',
      link: 'https://fakestore-metrics.netlify.app/',
      github: 'https://github.com/Meri-MG/Fakestore---react',
    },
    {
      id: 3,
      title: 'Meeting App',
      img: IMG2,
      description: p3description,
      technologies: 'JavaScript | Webpack',
      link: 'https://meri-mg.github.io/To-Do-List/dist/',
      github: 'https://github.com/Meri-MG/To-Do-List',
    },
    {
      id: 4,
      title: 'DAD WoodWork',
      img: DAD,
      description: p4description,
      technologies: 'JavaScript | Webpack',
      link: 'https://dad-woodwork.000webhostapp.com/',
      github: 'https://github.com/Meri-MG/To-Do-List',
    }
  ];

  return (
    <section id="portfolio">
      <h2>{language === "en" ? Languages.english.portfolio : Languages.spanish.portfolio}</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
