import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

const Header = (props) => {
   return (
      <header className={style.header}>
         <div className='container'>
            <div className={style.header__content}>
               <div className={style.header__logo}><img src="https://i.pinimg.com/originals/e7/eb/b9/e7ebb9c19633adddc0f06a7869f9c35b.png" alt="" className={style.logo} /></div>
               <div className={style.header_login}>
                  {props.isAuth ? props.login : <NavLink to='/login'>login</NavLink>}

               </div>
            </div>
         </div>
      </header>
   )
}

export default Header