import { useState } from 'react';
import styleButton from './buttonStyleProp';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCodeBranch, faCodeCommit, faCodeMerge, faCode, faCodeCompare } from '@fortawesome/free-solid-svg-icons'


const ButtonSpe = ({
  text= "default", 
  color="default", 
  variant= "default", 
  disableShadow = false, 
  disabled= false, 
  startIcon= null, 
  endIcon=null, 
  size= "md"}) => {
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
  /*
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
  //react integration intag function
    //start icon
    {
        //conditiona rendering startIcon
        startIcon ? <FontAwesomeIcon icon={ iconType() } style={styleButton.iconTwiker(marginSet)}/> : null
    }
    //endIcon
    {
        //conditiona rendering endIcon
        endIcon ? <FontAwesomeIcon icon={ iconType() } style={styleButton.iconTwiker(marginSet)}/> : null
    }
  */
  
  //styles initialization

  return (
    <>
      <button 
        disabled={disabled}
        style={styleButton.StyleTwiker(isHovering, color, variant, disableShadow, disabled, size)}
        onMouseEnter={ handleMouseEnter }
        onMouseLeave={ handleMouseLeave }
      > {text} </button>
    </>
  )
}

export default ButtonSpe