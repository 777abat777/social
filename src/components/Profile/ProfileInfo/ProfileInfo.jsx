import style from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
   return (
      <div className='profile__info'>
         <div className={style.profile__cover}>
            <img src={props.userData.photos.large} alt="" className={style.profile__img} />
         </div>
         <div>
            <h2>{props.userData.fullName}</h2>
            <img src={props.userData.photos.small} alt="" />
            <h2>{props.userData.aboutMe}</h2>
         </div>
      </div>
   )
}

export default ProfileInfo