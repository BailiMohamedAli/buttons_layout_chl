import React from 'react'
import { AddShoppingCart, Adb, Code, OfflineBolt, AddCircleOutline } from '@mui/icons-material'
import './buttonStyle.css'

const Button = ({
    text = "Default",
    color = "default",
    disableShadow = false,
    variant= "",
    disabled = false,
    startIcon,
    endIcon
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
          {startIcon === "AddShoppingCart" ? <AddShoppingCart className="iconstart__margin" /> 
          : startIcon === "Adb" ? <Adb className="iconstart__margin" /> 
            : startIcon === "Code" ? <Code className="iconstart__margin" /> 
              : startIcon === "OfflineBolt" ? <OfflineBolt className="iconstart__margin" /> 
                : startIcon === "AddCircleOutline" ? <AddCircleOutline className="iconstart__margin" /> 
                  : null}
            {text}  
          {endIcon === "AddShoppingCart" ? <AddShoppingCart className="iconend__margin" /> 
          : endIcon === "Adb" ? <Adb className="iconend__margin" /> 
            : endIcon === "Code" ? <Code className="iconend__margin" /> 
              : endIcon === "OfflineBolt" ? <OfflineBolt className="iconend__margin" /> 
                : endIcon === "AddCircleOutline" ? <AddCircleOutline className="iconend__margin" /> 
                  : null}
        </button>
    </div>
  )
}

//messi solution for the Icon management if it was like the fontawesome API it would havebeen better / still done 5 icon set to work correctly

export default Button;