import React from 'react'
import './input.css'
const InputBox = ({classname,placeholder}) => {
  return (
        <input type="text" className={classname ? `${classname}` : ''} placeholder={placeholder} />
  )
}

export default InputBox
