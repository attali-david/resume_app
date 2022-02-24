import React, {useState} from 'react'
import Editor from './Editor.js'

const DisplayEducation = (props) => {
  const {values, editor, edit, editMode, deleter, submitter} = props

  return(
    <>
    {values.map((value) => {
      if(!!editMode && value.id === edit.id) {
        return(
          <Editor edit={edit} submitter={submitter} key={value.id}/>
        )
      }
      else {
        return (
          <section className='display' key={value.id}>
            <h4 className='school'>{value.school}</h4>
            <time className='graduation'>{value.date}</time>
            <h5 className='degree'>{value.degree}</h5>
            <h6 className='major'>{value.major}</h6>
            <h6 className='minor'>{value.minor}</h6>
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

export default DisplayEducation
