import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
   return (
      <section className={style.profile}>
         <ProfileInfo />
         <MyPosts newPostText={props.profilePage.newPostText} postData={props.profilePage.postData} dispatch={props.dispatch} />
      </section>
   )
}

export default Profile