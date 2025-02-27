import React from 'react'
import './Button.css'
const Button = ({title,classname}) => {
  return (
    <div>
      <button className={classname ?  ` ${classname}` : ""}>
       {title}
      </button>
    </div>
  )
}

export default Button
