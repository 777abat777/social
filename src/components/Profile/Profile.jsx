import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
   return (
      <section className={style.profile}>
         <ProfileInfo />
         <MyPosts newPostText={props.profilePage.newPostText} postData={props.profilePage.postData} addPostData={props.addPostData} changeNewPostText={props.changeNewPostText} />
      </section>
   )
}

export default Profile