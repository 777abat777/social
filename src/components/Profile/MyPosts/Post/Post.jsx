import style from './Post.module.css'

const Post = (props) => {
   return (
      <div className={style.post}>
         <img src="https://img3.goodfon.com/wallpaper/nbig/1/3a/minimalism-skull-gold-teeth.jpg" alt="" />
         <p>{props.message}</p>
         <p>likes: <span>{props.likes}</span></p>
      </div>
   )
}

export default Post