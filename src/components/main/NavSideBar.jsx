import Menuenav from "./Menuenav"
import "./navsidebar.css"

function NavSideBar() {
  const menu = ["Color","Typography", "Spaces", "Buttons", "Inputs", "Grids"]
  return (
    <div className='navside'>
        <h2 className='navside__title'><span className='dash'>Dev</span>challenges.io</h2>
        <Menuenav menu={menu} />
    </div>
  )
}

export default NavSideBar