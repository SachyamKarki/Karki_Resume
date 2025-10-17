import React from 'react'
import { useI18n } from './i18n/i18nContext'
import Header from './components/Header'
import Profile from './components/Profile'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { t } = useI18n()

  return (
    <div className="App">
      <Header />
      <main>
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
