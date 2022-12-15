import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
   return (
      <section className={style.profile}>
         <ProfileInfo getProfileUsserdataThunk={props.getProfileUsserdataThunk} UpdateProfileUserData={props.UpdateProfileUserData} setPhoto={props.setPhoto} isAuthUser={props.isAuthUser} userData={props.userData} userStatus={props.userStatus} updateProfileUsserStatusThunk={props.updateProfileUsserStatusThunk} />
         <MyPostsContainer />
      </section>
   )
}

export default Profile