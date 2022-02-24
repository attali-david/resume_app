import React, {useState} from 'react'
import DisplayEducation from './DisplayEducation.js'
import uniqid from 'uniqid'

const initialValues = {
  school:'',
  date:'',
  degree:'',
  major: '',
  minor: '',
  id: uniqid(),
}

const Education = (props) => {
  const [values, setValues] = useState(initialValues)
  const [ed, setEd] = useState([])
  const [toggle, setToggle] = useState(false)
  const [edit, setEdit] = useState()
  const [editMode, setEditMode] = useState(false)

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setValues({...values, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setToggle(true)
    setEd((prevEd) => prevEd.concat(values))
    setValues({...initialValues, id:uniqid()})
  }

  const handleAdd = () => {
    setToggle(false)
  }

  const handleEdit = (data) => {
    setEditMode(true)
    setEdit(data)
  }

  const handleEditSubmit = (data) => {
    setToggle(true)
    const mapEd = ed.map(form=>{
      if(form.id === data.id) {
        form = data
      }
      return form
    })
    setEd(mapEd)
    setEditMode(false)
  }

  const handleDelete = (data) => {
    setEd(ed.filter(degree => degree.id != data.id))
  }

  return(
    <section>
      <DisplayEducation values={ed} editor={handleEdit} edit={edit} editMode={editMode} deleter={handleDelete} submitter={handleEditSubmit}/>
      {!!toggle && <button onClick={handleAdd}>ADD EDUCATION</button>}
      {!toggle && <form className='edForm' onSubmit={handleSubmit}>
        <label>
          <span>School:</span>
          <input type='text' name='school' value={values.school} onChange={handleInputChange}/>
        </label>
        <label>
          <span>Graduation Date:</span>
          <input type='date' name='date' value={values.date} onChange={handleInputChange}/>
        </label>
        <label>
          <span>Degree:</span>
          <input type='text' name='degree' value={values.degree} onChange={handleInputChange}/>
        </label>
        <label>
          <span>Major:</span>
          <input type='text' name='major' value={values.major} onChange={handleInputChange}/>
        </label>
        <label>
          <span>Minor:</span>
          <input type='text' name='minor' value={values.minor} onChange={handleInputChange}/>
        </label>
        <button type='submit'>Add Education</button>
      </form>}
    </section>
  )
}

export default Education
