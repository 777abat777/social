import style from './Users.module.css'
import userLogo from './../../assets/image/user.png'
import { NavLink } from 'react-router-dom'

const Users = (props) => {
   let pages = []
   let pagecount = props.totalUserCount - 20000
   pagecount = Math.ceil(pagecount / props.pageSize)
   for (let i = 1; i <= pagecount; i++) {
      pages.push(i)
   }
   return (
      <div className={style.users}>
         <h1 className={style.users_title}>Users</h1>
         <div className={style.users_pages}>
            {pages.map((page) => {
               return (
                  <span className={page === props.currentPage ? style.current_page : style.page} key={page} onClick={(e) => { props.changeCurrentPage(page) }}> {page}</span>
               )
            })}

         </div>
         {
            props.users.map((user) => {
               if (user.photos.small == null) {
                  return null
               }
               return (
                  <div key={user.id} className={style.user}>
                     <div className={style.user_left}>
                        <NavLink to={`/profile/${user.id}`}>
                           <img src={user.photos.small != null ? user.photos.small : userLogo} alt="" />
                        </NavLink>
                        {user.followed === true ? <button onClick={() => { props.unfollow(user.id) }}>unfollow</button> : <button onClick={() => { props.follow(user.id) }}>follow</button>}

                     </div>
                     <div className={style.user_right}>
                        <div className={style.user_right_info}>
                           <h2 className={style.user_name}>{user.name}</h2>
                           <p className={style.user_status}>{user.status}</p>
                        </div>
                        <div className={style.user_right_place}>
                           <div className={style.user_country}>Russia</div>
                           <div className={style.user_city}>Moscow</div>
                        </div>
                     </div>
                  </div>
               )
            })
         }

      </div >
   )
}
export default Users