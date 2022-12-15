import style from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import { useForm } from "react-hook-form";






const MyPosts = (props) => {
   const posts = props.postData.map((post) => { return <Post message={post.message} likes={post.likes} id={post.id} key={post.message} /> })

   const { register,
      handleSubmit,
      reset
   } = useForm();

   const onSubmit = (data) => {
      props.addPost(data.post)
      reset()
   }

   return (
      <div className={style.my__posts}>
         <div className='add__post'>
            <form onSubmit={handleSubmit(onSubmit)}>
               <p> <textarea cols="30" rows="4" {...register('post')}></textarea></p>
               <button>Отправить</button>
            </form>

         </div>
         <div className="posts">
            {posts}
         </div>
      </div>
   )
}

export default MyPosts