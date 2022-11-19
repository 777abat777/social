import style from './Users.module.css'
import userLogo from './../../assets/image/user.png'

const Users = (props) => {
   // console.log(props)
   if (props.users.length === 0) {
      props.setusers(
         [
            { id: 1, followed: false, name: 'Dmitriy', status: 'some status of user', location: { city: "Moscow", country: "Russia" } },
            { id: 2, followed: true, name: 'Dmitriy', status: 'some status of user', location: { city: "Moscow", country: "Russia" } },
            { id: 3, followed: false, name: 'Dmitriy', status: 'some status of user', location: { city: "Moscow", country: "Russia" } },
         ]

      )
   }

   return (
      <div className={style.users}>
         <h1 className={style.users_title}>Users</h1>
         {props.users.map((user) => {
            return (
               <div key={user.id} className={style.user}>
                  <div className={style.user_left}>
                     <img src={userLogo} alt="" />
                     {user.followed === true ? <button onClick={() => { props.unfollow(user.id) }}>unfollow</button> : <button onClick={() => { props.follow(user.id) }}>follow</button>}

                  </div>
                  <div className={style.user_right}>
                     <div className={style.user_right_info}>
                        <h2 className={style.user_name}>{user.name}</h2>
                        <p className={style.user_status}>{user.status}</p>
                     </div>
                     <div className={style.user_right_place}>
                        <div className={style.user_country}>{user.location.country}</div>
                        <div className={style.user_city}>{user.location.city}</div>
                     </div>
                  </div>
               </div>
            )
         })}

      </div>

   )
}


export default Users