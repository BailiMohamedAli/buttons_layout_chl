//methods
export const StyleTwiker = (hover, color, variant, disableShadow, disabled, size) => {
    //color setter
    let colorSet = null;
    if(color === "default") {
        colorSet = { 
            backgroundColor : hover ? "#AEAEAE" : "#E0E0E0",
            color: "#3F3F3F"
        }
    }
    if(color === "primary") {
        colorSet = { 
            backgroundColor : hover ? "#0039CB" : "#2962FF",
            color: "#fff"
        }
    }
    if(color === "secondary") {
        colorSet = { 
            backgroundColor : hover ? "#1C313A" : "#455A64",
            color: "#fff"
        }
    }
    if(color === "danger") {
        colorSet = { 
            backgroundColor : hover ? "#9A0007" : "#D32F2F",
            color: "#fff"
        }
    }
    //font styles segregation
    let fontStyles = {
        fontFamily: "'Noto Sans', sans-serif",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "20px",
    }
    //let size rectifier
    let sizeStyle= null;
    if(size === "sm"){
        sizeStyle = {
            minWidth: "62px",
            maxWidth: "120px",
            height: "32px",
        }
    }
    if(size === "md"){
        sizeStyle = {
            minWidth: "81px",
            maxWidth: "220px",
            height: "36px",
        }
    }
    if(size === "lg"){
        sizeStyle = {
            minWidth: "93px",
            maxWidth: "260px",
            height: "42px",
        }
    }
    //dispaly and flexbox
    let displayStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        ...sizeStyle
    }
    //main style default
    let  mainStyle = {
        ...fontStyles,
        ...displayStyle,
        ...colorSet,
        borderRadius: "6px",
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

//icon style
export const iconTwiker = (marginSetter) => {
    let marginStyle = {
        margin: marginSetter === "start" 
            ? "0px 10px 0px 0px" : marginSetter === "end" 
                ? "0px 00px 0px 10px" : "0px", 
    }
    let iconStyle = {
        ...marginStyle,
    }
    return iconStyle
}

// variant dependant style

const styleButton = {
    StyleTwiker,
    iconTwiker
}

export default styleButton;