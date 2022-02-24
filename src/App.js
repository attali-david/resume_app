import React, {useState, useEffect} from 'react'
import Bio from './components/Bio.js'
import Experience from './components/Experience.js'
import Skills from './components/Skills.js'
import Education from './components/Education.js'

const App = () => {

  return(
    <>
      <Bio/>
      <h2 className='sectionTitle'>EXPERIENCE</h2>
      <Experience/>
      <h2 className='sectionTitle'>SKILLS</h2>
      <Skills/>
      <h2 className='sectionTitle'>EDUCATION</h2>
      <Education/>
    </>
  )
}

export default App;
