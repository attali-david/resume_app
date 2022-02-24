import React, {useState} from 'react'

const DisplayBio = (props) => {
  const {values} = props
  return (
    <header className='bio'>
      <h1>{values.name}</h1>
      <h2>{values.email}</h2>
    </header>
  )
}

export default DisplayBio
