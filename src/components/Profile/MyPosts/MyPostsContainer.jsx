import React from 'react'
import { connect } from 'react-redux'
import { addPostActionCreator, changePostTextActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'





// const  = (props) => {
//    let state = props.store.getState()
//    let addpost = () => {
//       props.store.dispatch(addPostActionCreator())

//    }
//    let changePostText = (value) => {
//       props.store.dispatch(changePostTextActionCreator(value))
//    }
//    return <MyPosts postData={state.profilePage.postData} newPostText={state.profilePage.newPostText} changePostText={changePostText} addpost={addpost} />
// }

let mapStateToProps = (state) => {
   return {
      postData: state.profilePage.postData,
      newPostText: state.profilePage.newPostText,
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      addpost() {
         dispatch(addPostActionCreator())
      },
      changePostText(value) {
         dispatch(changePostTextActionCreator(value))
      }
   }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer