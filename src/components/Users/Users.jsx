import style from './Users.module.css'
import React from 'react';
import { Pagination } from 'antd';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Users = (props) => {
   let pages = []
   let pagecount = props.totalUserCount - 21780
   pagecount = Math.ceil(pagecount / props.pageSize)
   for (let i = 1; i <= pagecount; i++) {
      pages.push(i)
   }

   return (
      <div className={style.users}>
         <h1 className={style.users_title}>Users</h1>
         <div className={style.users_pages}>
            <Pagination className={style.pagination} simple defaultCurrent={props.currentPage} total={props.totalUserCount} onChange={(page, pageSize) => {
               props.changeCurrentPage(page);
            }} />
         </div>
         {
            props.users.map((user) => {
               return (
                  <div key={user.id} className={style.user}>
                     <div className={style.user_left}>
                        <NavLink to={`/profile/${user.id}`}>
                           {user.photos.small != null ? <img src={user.photos.small} alt='some avatar' /> : <FontAwesomeIcon icon={faUser} />}
                        </NavLink>
                        {/* disabled={props.followingProgress.some((id) => id === user.id)} onClick={() => { props.unfollowthunk(user.id) }} */}
                        {/* disabled={props.followingProgress.some((id) => id === user.id)} onClick={() => { props.followthunk(user.id) }} */}
                        {user.followed ?
                           <button disabled={props.followingUsers.some((id) => id === user.id)} onClick={() => { props.unFollowUser(user.id) }}>Unfollow</button> :
                           <button disabled={props.followingUsers.some((id) => id === user.id)} onClick={() => { props.followUser(user.id) }}>Follow</button>}
                     </div>
                     <div className={style.user_right}>
                        <div className={style.user_right_info}>
                           <h3 className={style.user_name}>{user.name}</h3>
                           <p className={style.user_status}>Status: {user.status != null ? user.status : 'my status is empty :('}</p>
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