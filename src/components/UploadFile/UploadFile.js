import React from 'react'
import UploadIcon from '../../icons/upload-icon.svg'
import './upload-file.scss'

export const UploadFile = ({ label, name }) => {
  
  const handlerOnChange = (e) => {
    let files = e.target.files
    let reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload = (e) => console.log(e.target.result)
  }

  return (
    <div className="upload-file">
      <input type="file" name={name} onChange={handlerOnChange} />
      <img src={UploadIcon} alt="upload icon" />
      <span>{label}</span>
    </div>
  )
}
