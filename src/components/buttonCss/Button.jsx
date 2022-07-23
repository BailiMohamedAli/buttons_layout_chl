import React from 'react'
import './buttonStyle.css'

const Button = ({
    text = "testing",
    color = "default",
    disableShadow = false
}) => {
  return (
    <div>
        <button className={`btn ${color} ${!disableShadow ? "" : "shadow__off"}`}>
            {text}
        </button>
    </div>
  )
}

export default Button;