import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
   return (
      <section className={style.profile}>
         <ProfileInfo />
         {/* <MyPosts newPostText={props.profilePage.newPostText} postData={props.profilePage.postData} dispatch={props.dispatch} /> */}
         <MyPostsContainer store={props.store} />
      </section>
   )
}

export default Profile