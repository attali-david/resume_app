import React, {useState, useEffect} from 'react'
import DisplayBio from './DisplayBio.js'
const initialValues = {
  name:'',
  email:'',
}

const Bio = (props) => {
  const [values, setValues] = useState(initialValues)

  const [toggle, setToggle] = useState(false)

  const handleInputChange = (e) => {
    const {name, value} = e.target

    setValues({
      ...values,
      [name]:value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setToggle(true)
  }

  const handleEdit = (e) => {
    setToggle(false)
  }

  useEffect(()=>{
    <header>
      <h1>{values.name}</h1>
      <h2>{values.email}</h2>
    </header>
  })

  return(
    <>
      {!toggle && <form className='bioForm' onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input type='text' name='name' value={values.name} onChange={handleInputChange}/>
        </label>
        <label>
          <span>Email</span>:
          <input type='email' name='email' value={values.email} onChange={handleInputChange}/>
        </label>
        <button type='submit'>Submit</button>
      </form>}
      {!!toggle &&
      <>
        <DisplayBio values={values}/>
        <button className='bioEdit' onClick={handleEdit}>EDIT</button>
      </>}
    </>
  )
}

export default Bio
