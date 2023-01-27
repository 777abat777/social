import style from './Users.module.scss'
import React from 'react';
import { Pagination } from 'antd';
import User from './User/User';
import { UserType } from '../../store/UsersSlice/TypesSlice';


type Props = {
   totalUserCount: number
   pageSize: number
   currentPage: number
   changeCurrentPage: (page: number) => void
   followUser: (id: number) => void
   unFollowUser: (id: number) => void
   users: UserType[]
   followingUsers: Array<any>
}


const Users: React.FC<Props> = ({ changeCurrentPage, currentPage, followUser, followingUsers, pageSize, totalUserCount, unFollowUser, users }) => {
   let pages = []
   let pagecount = totalUserCount - 21780
   pagecount = Math.ceil(pagecount / pageSize)
   for (let i = 1; i <= pagecount; i++) {
      pages.push(i)
   }

   return (
      <div className={style.users}>
         <h1 className={style.users_title}>Users</h1>
         <div className={style.users_pages}>
            <Pagination className={style.pagination} simple defaultCurrent={currentPage} total={totalUserCount} onChange={(page, pageSize) => {
               changeCurrentPage(page);
            }} />
         </div>
         {users.map((user) => {
            return <User followUser={followUser} followingUsers={followingUsers} unFollowUser={unFollowUser} user={user} key={user.id} />
         })}
      </div >
   )
}
export default Users