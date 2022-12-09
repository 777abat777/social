import style from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus'


const ProfileInfo = (props) => {
   return (
      <div className='profile__info'>
         <div className={style.profile__cover}>
            <div className={style.status_container}>
               {/* <h2>{props.userData.aboutMe}</h2> */}
               <ProfileStatus userStatus={props.userStatus} updateProfileUsserStatusThunk={props.updateProfileUsserStatusThunk} />
            </div>
            <div>
               <h2>{props.userData.fullName}</h2>
               <img src={props.userData.photos.large} alt="" className={style.profile__img} />
            </div>
         </div>
         <div>

            <img src={props.userData.photos.small} alt="" />

         </div>
      </div>
   )
}

export default ProfileInfo