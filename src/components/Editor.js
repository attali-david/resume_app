import React, {useState} from 'react'

const Editor = (props) => {
  const {edit, submitter} = props

  const [values, setValues] = useState(edit)

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setValues({...values, [name]:value})
  }
  if(edit.school){
    return(
      <form onSubmit={()=>submitter(values)}>
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
        <button type='submit'>SAVE</button>
      </form>
    )
  } else if(edit.company){
    return(
      <form onSubmit={()=>submitter(values)}>
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
      </form>
    )
  }
}

export default Editor
