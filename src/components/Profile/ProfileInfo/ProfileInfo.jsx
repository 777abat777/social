import style from './ProfileInfo.module.css'
import ProfileHeader from './ProfileHeader/ProfileHeader';

const ProfileInfo = (props) => {

   console.log(props.userData)
   return (
      <div className='profile__info'>
         <ProfileHeader setPhoto={props.setPhoto} isAuthUser={props.isAuthUser} userData={props.userData} userStatus={props.userStatus} updateProfileUsserStatusThunk={props.updateProfileUsserStatusThunk} />
         <div>
            <img src={props.userData.photos.small} alt="" />
         </div>
      </div>
   )
}

export default ProfileInfo