import React from 'react'
import IconType from './IconType'
import './buttonStyle.css'

const Button = ({
    text = "Default",
    color = "default",
    disableShadow = false,
    variant= "",
    disabled = false,
    startIcon,
    endIcon,
    size = "md"
}) => {

  const setPosition = () =>{
    if(endIcon) return true;
      return false;
  }
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
        ${size}
        `}>
          {startIcon ? <IconType setIcon={startIcon} position={setPosition()} /> : null}
            {text}
          {endIcon ? <IconType setIcon={endIcon} position={setPosition()} /> : null}  
        </button>
    </div>
  )
}

export default Button;