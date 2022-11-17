import style from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'







const MyPosts = (props) => {
   console.log(props)
   const posts = props.postData.map((post) => { return <Post message={post.message} likes={post.likes} id={post.id} key={post.key} /> })

   let textarearef = React.createRef()


   let addpost = () => {
      props.addpost()

   }
   let changePostText = () => {
      let value = textarearef.current.value
      props.changePostText(value)
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