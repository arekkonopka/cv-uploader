import { useDropzone } from 'react-dropzone'
import DragNDropIcon from '../../../public/DragNDropIcon.svg'

import Image from 'next/image'

export const MyDropzone = (onDrop) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div
      {...getRootProps()}
      className="p-4 border-dotted border-2 border-black"
    >
      <div className="w-full flex justify-center">
        <Image
          src={DragNDropIcon}
          alt="dragndrop icon"
          width="80"
          height="80"
        />
      </div>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-large">Drop the files here ...</p>
      ) : (
        <p className="text-large">
          Drag and drop some files here, or click to select files
        </p>
      )}
    </div>
  )
}
