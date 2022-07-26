import Menuenav from "./Menuenav"
import "./navsidebar.css"

function NavSideBar() {
  return (
    <div className='navside'>
        <h2 className='navside__title'><span className='dash'>Dev</span>challenges.io</h2>
        <Menuenav />
    </div>
  )
}

export default NavSideBar