import React, {useState} from 'react'
import DisplaySkills from './DisplaySkills.js'
import uniqid from 'uniqid'

const initialValues = {
  skill: '',
  id: uniqid()
}

const Skills = () => {
  const [values, setValues]= useState(initialValues)
  const [skills, setSkills] = useState([])
  const [toggle, setToggle] = useState(false)

  const handleInputChange = (e) => {
    const {name, value} = e.target
      setValues({...values, [name]:value})
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      setToggle(true)
      setSkills((prevSkills)=>prevSkills.concat(values))
      setValues({...initialValues, id:uniqid()})
  }

  const handleAdd = () => {
    setToggle(false)
  }

  const handleDelete = (data) => {
    setSkills(skills.filter(skill => skill.id != data.id))
  }

  return(
    <section>
      <DisplaySkills values={skills} deleter={handleDelete}/>
      {!!toggle && <button onClick={handleAdd}>ADD SKILL</button>}
      {!toggle && <form className='skillForm' onSubmit={handleSubmit}>
          <label htmlFor='skill'>Add Skill:
            <input type='text' name='skill' value={values.skill} onChange={handleInputChange}/>
          </label>
          <button type='submit'>Submit</button>
      </form>}
    </section>
  )
}

export default Skills
