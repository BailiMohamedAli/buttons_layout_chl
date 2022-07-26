import React from 'react'

function Menuenav({menu}) {
    console.log(menu);
    const rendMenuList = menu.map((unit, index) =>{
        if(unit === "Buttons"){
            return(
                <h3 key={index} className='menu__active'> {unit} </h3>
            )
        }
        return(<h3 key={index}> {unit} </h3>) 
        }  
    )
  return (
    <div className='menu'>
        {/* <h3>color</h3>
        <h3>Typography</h3>
        <h3>Spaces</h3>
        <h3 className='menu__active'>Buttons</h3>
        <h3>Inputs</h3>
        <h3>Grids</h3> */}
        {rendMenuList}
    </div>
  )
}

export default Menuenav