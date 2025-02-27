import React from 'react'
import './Button.css'
const Button = ({title,classname,icon}) => {
  return (
    <div>
      
      <button className={classname ?  ` ${classname}` : ""}>
      {icon && <span>{icon}</span>} {title} 
      </button>
    </div>
  )
}

export default Button
