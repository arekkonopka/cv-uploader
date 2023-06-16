'use client'

import React from 'react'
import { Dropzone } from '../../components/Dropzone'

const Upload = () => {
  const onDrop = (acceptedFiles) => {
    fetch('http://localhost:5000/cv', {
      method: 'POST',
      body: acceptedFiles?.[0],
    })
  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Dropzone onDrop={onDrop} />
    </div>
  )
}

export default Upload
