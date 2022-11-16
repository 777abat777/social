import style from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import { addPostActionCreator, changePostTextActionCreator } from './../../../redux/profileReducer'






const MyPosts = (props) => {
   let postData = props.postData
   const posts = postData.map((post) => { return <Post message={post.message} likes={post.likes} id={post.id} key={post.key} /> })


   let textarearef = React.createRef()



   let addpost = () => {
      props.dispatch(addPostActionCreator())

   }
   let changePostText = () => {
      let value = textarearef.current.value
      props.dispatch(changePostTextActionCreator(value))
   }
   return (
      <div className="my__posts">
         <div className='add__post'>
            <textarea name="" id="" cols="30" rows="4" ref={textarearef} value={props.newPostText} onChange={changePostText}></textarea>
            <br />
            <button type="submit" className="button" onClick={addpost}>Отправить</button>
         </div>
         <div className="posts">
            {posts}
         </div>
      </div>
   )
}

export default MyPosts