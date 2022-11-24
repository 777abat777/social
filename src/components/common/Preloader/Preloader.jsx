import loadingUsersGif from './../../../assets/image/loading__.gif'
import style from './Preloader.module.css'

const Preloader = (props) => {
   return (
      <div className={style.preloader}>
         <img src={loadingUsersGif} alt="" className={style.preloader_img} />
      </div>
   )
}

export default Preloader