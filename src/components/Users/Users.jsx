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
            {/* {pages.map((page) => {
               return (
                  <span className={page === props.currentPage ? style.current_page : style.page} key={page} onClick={(e) => { props.changeCurrentPage(page) }}> {page}</span>
               )
            })} */}

         </div>
         {
            props.users.map((user) => {
               return (
                  <div key={user.id} className={style.user}>
                     <div className={style.user_left}>
                        <NavLink to={`/profile/${user.id}`}>
                           {user.photos.small != null ? <img src={user.photos.small} /> : <FontAwesomeIcon icon={faUser} />}

                        </NavLink>
                        {user.followed === true ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button> : <button onClick={() => { props.follow(user.id) }}>Follow</button>}

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