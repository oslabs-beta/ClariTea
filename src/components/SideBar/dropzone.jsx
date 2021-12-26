import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

export default function MyDropzone() {
    const [responseArray, setArray] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const data = reader.result
        console.log(data)
        if(data){
          postUpload(data)
        }
      }
      reader.readAsText(file)
    })
    
  }, []);
  const {getRootProps, getInputProps} = useDropzone({onDrop});
  function postUpload(data) {
    fetch('/api/fileUpload', {
        method: "POST",
        headers: { 'Content-Type': 'application-json' },
        body: JSON.stringify({data})
    })
    .then(res => res.json())
    .then(data => {
        setArray(data);
    })
    .catch(error => console.log(error, 'error'))
  }
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag and drop or click to select files</p>
    </div>
  )
}