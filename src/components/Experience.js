import React, {useState} from 'react'
import DisplayExperience from './DisplayExperience.js'
import uniqid from 'uniqid'


const initialValues = {
  company: '',
  position: '',
  startDate: '',
  endDate: '',
  taskOne: '',
  taskTwo: '',
  taskThree: '',
  id:uniqid()
}

const Experience = (props) => {
  const [values, setValues] = useState(initialValues)
  const [xp, setXp] = useState([])
  const [toggle, setToggle] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [edit, setEdit] = useState()


  const handleInputChange = (e) => {
    const {name, value} = e.target;

    setValues({
      ...values,
      [name]:value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setToggle(true)
    setXp((prevXp)=>prevXp.concat(values))
    setValues({...initialValues, id:uniqid()})
  }

  const handleAdd = () => {
    setToggle(false)
  }

  const handleEdit = (data) => {
    setEditMode(true)
    setEdit(data)
    console.log(data)
  }

  const handleEditSubmit = (data) => {
    setToggle(true)
    const mapXp = xp.map(form=>{
      if(form.id === data.id) {
        form = data
      }
      return form
    })
    setXp(mapXp)
    setEditMode(false)
  }

  const handleDelete = (data) => {
    setXp(xp.filter(exp => exp.id != data.id))
  }
  return(
    <main>
      <DisplayExperience values={xp} editor={handleEdit} edit={edit} editMode={editMode} deleter={handleDelete} submitter={handleEditSubmit}/>
      {!!toggle && <button onClick={handleAdd}>ADD EXPERIENCE</button>}
      {!toggle && <form className='xpForm' onSubmit={handleSubmit}>
        <label>Company:
          <input type='text' name='company' value={values.company} onChange={handleInputChange}/>
        </label>
        <label>Position:
          <input type='text' name='position' value={values.position} onChange={handleInputChange}/>
        </label>
        <label>From:
          <input type='date' name='startDate' value={values.startDate} onChange={handleInputChange}/>
        </label>
        <label>To:
          <input type='date' name='endDate' value={values.endDate} onChange={handleInputChange}/>
        </label>
        <label>Task
          <input type='text' name='taskOne' value={values.taskOne} onChange={handleInputChange}/>
        </label>
        <label>Task
          <input type='text' name='taskTwo' value={values.taskTwo} onChange={handleInputChange}/>
        </label>
        <label>Task
          <input type='text' name='taskThree' value={values.taskThree} onChange={handleInputChange}/>
        </label>
        <button type="submit">Submit</button>
      </form>}
    </main>
  )
}

export default Experience
