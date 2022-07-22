import { useState } from 'react';
import styleButton from './buttonStyleProp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faCodeCommit, faCodeMerge, faCode, faCodeCompare } from '@fortawesome/free-solid-svg-icons'


const ButtonSpe = ({text, variant, disableShadow, disabled, startIcon, endIcon, size}) => {
  //null conditions gard clauses
  if(!text) text = "Default";
  if(!variant) variant = "Default";
  if(!disableShadow) disableShadow = false;
  if(!disabled) disabled = false;
  if(!startIcon) startIcon = null;
  if(!endIcon) endIcon = null;
  if(!size) size = "md";

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

  //icon type setter
  const iconType = () =>{
    if(startIcon === "code_branch" || endIcon === "code_branch") 
      return faCodeBranch;
    if(startIcon === "code_commit" || endIcon === "code_commit")
      return faCodeCommit;
    if(startIcon === "code_merge" || endIcon === "code_merge")
      return faCodeMerge;
    if(startIcon === "code" || endIcon === "code")
      return faCode;
    if(startIcon === "code_compare" || endIcon === "code_compare")
      return faCodeCompare;
  }
  
  //styles initialization

  return (
    <>
      <button 
        disabled={disabled}
        style={styleButton.StyleTwiker(isHovering, variant, disableShadow, disabled, size)}
        onMouseEnter={ handleMouseEnter }
        onMouseLeave={ handleMouseLeave }
      > 
        {
        //conditiona rendering startIcon
        startIcon ? <FontAwesomeIcon icon={ iconType() } style={styleButton.iconTwiker(marginSet)}/> : null
        }
        {text} 
        {
        //conditiona rendering endIcon
        endIcon ? <FontAwesomeIcon icon={ iconType() } style={styleButton.iconTwiker(marginSet)}/> : null
        } </button>
    </>
  )
}

export default ButtonSpe