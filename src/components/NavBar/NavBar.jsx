import { NavLink } from 'react-router-dom'
import style from './NavBar.module.css'
const NavBar = () => {
   return (
      <nav className={style.nav} >
         <ul>
            <li ><NavLink to='/profile'>Profile</NavLink></li>
            <li><NavLink to='/dialogs'>Messages</NavLink></li>
            <li ><NavLink to='/photo'>Photo</NavLink></li>
            <li><NavLink to='/users'>users</NavLink></li>
         </ul>
      </nav >
   )
}
export default NavBar