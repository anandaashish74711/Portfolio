import React from 'react'
import Header from './Components/Header/Header.jsx'
import About from './Components/About/About'
import Rav from './Components/Rav/Rav.jsx'
import Education from './Components/Education/Education'
import Achievment from './Components/Achievment/Achievment.jsx'
import Experience from './Components/Experience/Experience'
import Skills from './Components/Skills/Skills'


import Projects from './Components/Projects/Projects'
import Contacts from './Components/Contacts/Contacts'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <>
    <Header/>
     <Rav/>
     <About/>
     <Education/>
     <Achievment/>
     <Experience/>
     <Skills/>
     <Projects/>
     
     <Contacts/>
     <Footer/>
    </>
  )
}

export default App