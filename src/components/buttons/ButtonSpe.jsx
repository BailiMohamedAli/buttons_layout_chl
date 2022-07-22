import { useState } from 'react';
import styleButton from './buttonStyleProp';


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
      > {text} </button>
    </>
  )
}

export default ButtonSpe