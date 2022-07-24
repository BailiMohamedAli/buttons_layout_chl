import React from 'react'
import './buttonStyle.css'

const Button = ({
    text = "Default",
    color = "default",
    disableShadow = false,
    variant= "",
    disabled = false
}) => {
  return (
    <div>
        <button
        disabled = {disabled}
        onClick={() => console.log("testrun") }
        className={`btn 
        ${color} 
        ${!disableShadow ? "" : "shadow__off"}
        ${variant === "text" ? `outline ${variant}`: variant}
        ${disabled && !variant ? "disable" : disabled && variant ? "disable__text":""}
        `}>
            {text}
        </button>
    </div>
  )
}

export default Button;