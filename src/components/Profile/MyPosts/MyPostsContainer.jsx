import React from 'react'
import { addPostActionCreator, changePostTextActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'





const MyPostsContainer = (props) => {
   let state = props.store.getState()
   let addpost = () => {
      props.store.dispatch(addPostActionCreator())

   }
   let changePostText = (value) => {
      props.store.dispatch(changePostTextActionCreator(value))
   }
   return <MyPosts postData={state.profilePage.postData} newPostText={state.profilePage.newPostText} changePostText={changePostText} addpost={addpost} />
}

export default MyPostsContainer