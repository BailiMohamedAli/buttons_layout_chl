import { useState } from 'react';
import styleButton from './buttonStyleProp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'


const ButtonSpe = ({text, variant, disableShadow, disabled}) => {
  //null conditions
  if(!text) text = "Default";
  if(!variant) variant = "Default";
  if(!disableShadow) disableShadow = false;
  if(!disabled) disabled = false;

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
      > {text} 
      <FontAwesomeIcon icon={ faCodeBranch }/></button>
    </>
  )
}

export default ButtonSpe