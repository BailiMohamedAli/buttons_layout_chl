import { useState } from 'react';
import styleButton from './buttonStyleProp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'


const ButtonSpe = ({text, variant, disableShadow, disabled, startIcon, endIcon}) => {
  //null conditions gard clauses
  if(!text) text = "Default";
  if(!variant) variant = "Default";
  if(!disableShadow) disableShadow = false;
  if(!disabled) disabled = false;
  if(!startIcon) startIcon = null;
  if(!endIcon) endIcon = null;

  //margin icon setter
  let marginSet = ''
  if(startIcon) marginSet = "start"
  if(endIcon) marginSet = "end"

  //hover state
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  
  //styles initialization

  return (
    <>
      <button 
        disabled={disabled}
        style={styleButton.StyleTwiker(isHovering, variant, disableShadow, disabled)}
        onMouseEnter={ handleMouseEnter }
        onMouseLeave={ handleMouseLeave }
      > 
        {
        //conditiona rendering startIcon
        startIcon ? <FontAwesomeIcon icon={ faCodeBranch } style={styleButton.iconTwiker(marginSet)}/> : null
        }
        {text} 
        {
        //conditiona rendering endIcon
        endIcon ? <FontAwesomeIcon icon={ faCodeBranch } style={styleButton.iconTwiker(marginSet)}/> : null
        } </button>
    </>
  )
}

export default ButtonSpe