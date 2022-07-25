import { AddShoppingCart, Adb, Code, OfflineBolt, AddCircleOutline } from '@mui/icons-material'

const IconType = ({setIcon, position}) => {
    const startOrend = () =>{
        if(!position) return "iconstart__margin";
            return "iconend__margin"
    }
    
  return (
    <div>
        {setIcon === "AddShoppingCart" ? <AddShoppingCart className={startOrend()} /> 
          : setIcon === "Adb" ? <Adb className={startOrend()} /> 
            : setIcon === "Code" ? <Code className={startOrend()} /> 
              : setIcon === "OfflineBolt" ? <OfflineBolt className={startOrend()} /> 
                : setIcon === "AddCircleOutline" ? <AddCircleOutline className={startOrend()} /> 
                  : null}
    </div>
  )
}

export default IconType