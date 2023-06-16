'use client'

import React from 'react'
import { MyDropzone } from '../../components/Dropzone'

const Upload = () => {
  const onDrop =
    ((acceptedFiles) => {
      // Do something with the files
    },
    [])
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <MyDropzone onDrop={onDrop} />
    </div>
  )
}

export default Upload
