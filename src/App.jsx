import React from 'react'
import { useState, createContext } from 'react'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Topbar from './components/topbar/Topbar'
import spain from './assets/spain.png'
import unitedkingdom from './assets/unitedkingdom.png'

import Languages from './langauges/Languages'

export const LanguageContext = React.createContext()

const App = () => {
  const styles = {
    div: {
      display: 'flex',
      justifyContent: 'center',
      alingContent: 'center',
      marginTop: 20,
    },
    button: {
      background: 'none',
      color: 'white',
    },
    img: {
      display: 'flex',
      widht: 70,
      height: 50,
      padding: 5,
      marginLeft: 8
    },
    text: {
      paddingTop: 9
    }
  }

  const [language, setLanguage] = useState('en')

  const changelanguage = () => {
    if (language === 'en') {
      setLanguage('es')
    }
    if (language === 'es') {
      setLanguage('en')
    }
  }

  return (
    <>
      <LanguageContext.Provider value={language}>
        {
          <div style={styles.div}>
            <p style={styles.text}>
            {language === 'en' ? Languages.english.language_btn : Languages.spanish.language_btn}
            </p>
            <button onClick={changelanguage} style={styles.button}>
              {language === 'en' ? <img style={styles.img} src={unitedkingdom}></img> : <img style={styles.img} src={spain}></img>}
            </button>
          </div>
        }
        <Header />
        <Topbar />
        <Intro />
        <Experience />
        <Portfolio />
        <Footer />
      </LanguageContext.Provider>
    </>
  )
}

export default App
