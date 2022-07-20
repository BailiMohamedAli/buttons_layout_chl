
    
//methods
export const StyleTwiker = (hover, variant, disableShadow, disabled) => {
    //font styles segregation
    let fontStyles = {
        fontFamily: "'Noto Sans', sans-serif",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "20px",
    }
    //main style default
    let  mainStyle = {
        ...fontStyles,
        width: "81px",
        height: "36px",
        borderRadius: "6px",
        backgroundColor: hover? "#AEAEAE" :"#E0E0E0",
        padding: "8px 16px",
        border: "none",
        boxShadow: "0px 2px 3px rgba(51, 51, 51, 0.2)"
    }
    if(disableShadow){
        mainStyle = {
            ...mainStyle,
            boxShadow: "none"
        }
    }
    if(disabled){
        mainStyle = {
            ...mainStyle,
            color: "#9E9E9E"
        }
    }
    if(variant === "outline"){
        mainStyle = {...mainStyle,
                color: disabled? "#9E9E9E" : "#3D5AFE",
                border: "1px solid #3D5AFE",
                backgroundColor: hover? "rgba(41, 98, 255, 0.1)": "#fff"  
            }
    } 
    if(variant === "text"){
        mainStyle = {
            ...mainStyle,
            color: disabled? "#9E9E9E" :"#3D5AFE",
            border: "none",
            backgroundColor: hover? "rgba(41, 98, 255, 0.1)": "transparent",
            boxShadow: "none"
        }
    }
    
    //defaulting
    return mainStyle;

}

// variant dependant style

const styleButton = {
    StyleTwiker
}

export default styleButton;