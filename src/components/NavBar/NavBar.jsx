import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMessage, faPhotoFilm, faUserFriends, faShuffle } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import style from './NavBar.module.css'
const NavBar = () => {
   return (
      <nav className={style.nav} >
         <ul>
            <li ><FontAwesomeIcon icon={faUser} /><NavLink to='/profile'>Profile</NavLink></li>
            <li><FontAwesomeIcon icon={faMessage} /><NavLink to='/dialogs'>Messages</NavLink></li>
            <li ><FontAwesomeIcon icon={faPhotoFilm} /><NavLink to='/photo'>Photo</NavLink></li>
            <li><FontAwesomeIcon icon={faUserFriends} /><NavLink to='/users'>users</NavLink></li>
            <li><FontAwesomeIcon icon={faShuffle} /><NavLink to='/testingpage'>test page</NavLink></li>
         </ul>

      </nav >
   )
}
export default NavBar