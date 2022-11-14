import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
   return (
      <div className='profile__info'>
         <img src="https://img4.goodfon.com/wallpaper/nbig/5/83/1977-datsun-280z-wheels.jpg" alt="" className={style.profile__img} />
         <div>ava+desc</div>
      </div>
   )
}

export default ProfileInfo