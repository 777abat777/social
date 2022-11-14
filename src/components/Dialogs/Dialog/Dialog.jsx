import { NavLink } from 'react-router-dom'
import style from './Dialog.module.css'




const Dialog = (props) => {
   let path = "/dialogs/" + props.id
   return (
      <div className={style.dialog}>
         <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" alt="" />
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
}

export default Dialog