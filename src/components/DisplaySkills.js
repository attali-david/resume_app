import React, {useState} from 'react'

const DisplaySkills = (props) => {
  const {values, deleter} = props

  return(
    <section className='display'>
    {values.map( (skill) => {
      return(
        <ul key={skill.id}>
          <li>{skill.skill}</li>
          <button onClick={() => deleter(skill)}>DELETE</button>
        </ul>
      )}
      )}
    </section>
  )
}

export default DisplaySkills
