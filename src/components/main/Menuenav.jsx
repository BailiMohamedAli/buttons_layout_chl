import React from 'react'

function Menuenav({menu}) {
  return (
    <div className='menu'>
        <h3>color</h3>
        <h3>Typography</h3>
        <h3>Spaces</h3>
        <h3 className='menu__active'>Buttons</h3>
        <h3>Inputs</h3>
        <h3>Grids</h3>
    </div>
  )
}

export default Menuenav