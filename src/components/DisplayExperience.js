import React, {useState} from 'react'
import Editor from './Editor.js'

const DisplayExperience = (props) => {
  const {values, editor, edit, editMode, deleter, submitter} = props
  return(
    <>
    {values.map((value)=>{
      if(!!editMode && value.id === edit.id) {
        return(
          <Editor edit={edit} submitter={submitter} key={value.id}/>
        )
      }
      else {
      return(
          <section className='display' key={value.id}>
            <h3>{value.company}</h3>
            <h3>{value.position}</h3>
            <time>{value.startDate}-{value.endDate}</time>
            <ul>
              <li>{value.taskOne}</li>
              <li>{value.taskTwo}</li>
              <li>{value.taskThree}</li>
            </ul>
            <aside>
              <button onClick={() => editor(value)}>EDIT</button>
              <button onClick={() => deleter(value)}>DELETE</button>
            </aside>
          </section>
      )
      }
    })}
    </>
  )
}

export default DisplayExperience
