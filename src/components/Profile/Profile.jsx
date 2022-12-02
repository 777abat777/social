import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { Navigate } from 'react-router-dom'

const Profile = (props) => {
   return (
      <section className={style.profile}>
         <ProfileInfo userData={props.userData} />
         {/* <MyPosts newPostText={props.profilePage.newPostText} postData={props.profilePage.postData} dispatch={props.dispatch} /> */}
         <MyPostsContainer />
      </section>
   )
}

export default Profile