import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
const Header = (props) => {
   console.log(props)
   return (
      <header className={style.header}>
         <div className='container'>
            <div className={style.header__content}>
               <div className={style.header__logo}><FontAwesomeIcon icon={faCodeBranch} /></div>
               <div className={style.header_login}>
                  {props.isAuth ? props.login : <NavLink to='/login'>login</NavLink>}
                  {props.isAuth ? <button onClick={props.logoutUserThunk}>Выйти</button> : null}
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header