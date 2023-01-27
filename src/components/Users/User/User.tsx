import React from 'react'
import style from './User.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { UserType } from '../../../store/UsersSlice/TypesSlice'

type Props = {
   user: UserType
   followingUsers: number[]
   followUser: (id: number) => void
   unFollowUser: (id: number) => void
}

const User: React.FC<Props> = ({ user, followUser, followingUsers, unFollowUser }) => {
   return (
      <div key={user.id} className={style.user}>
         <div className={style.user_left}>
            <NavLink to={`/profile/${user.id}`}>
               {user.photos.small != null ? <img src={user.photos.small} alt='some avatar' /> : <FontAwesomeIcon icon={faUser} />}
            </NavLink>
            {user.followed ?
               <button disabled={followingUsers.some((id) => id === user.id)} onClick={() => { unFollowUser(user.id) }}>Unfollow</button> :
               <button disabled={followingUsers.some((id) => id === user.id)} onClick={() => { followUser(user.id) }}>Follow</button>}
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
}

export default User