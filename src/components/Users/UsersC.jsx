import style from './Users.module.css'
import userLogo from './../../assets/image/user.png'
import axios from 'axios'
import React from 'react'

class Users extends React.Component {
   constructor(props) {
      super(props);
   }
   componentDidMount() {
      this.getUssers()
   }
   changeCurrentPage = (page) => {
      this.props.changePage(page)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then((response) => {
         this.props.setusers(response.data.items)
      })
   }
   getUssers = () => {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then((response) => {
         this.props.setusers(response.data.items)
         // console.log(response.data)
         this.props.setUsersTotalCount(response.data.totalCount)
      })
   }
   render = () => {
      let pages = []
      let pagecount = this.props.totalUserCount - 21780
      pagecount = Math.ceil(pagecount / this.props.pageSize)
      for (let i = 1; i <= pagecount; i++) {
         pages.push(i)
      }
      return (
         <div className={style.users}>
            <h1 className={style.users_title}>Users</h1>
            <div className={style.users_pages}>
               {pages.map((page) => {
                  return (
                     <span className={page === this.props.currentPage ? style.current_page : style.page} key={page} onClick={() => { this.changeCurrentPage(page) }}> {page}</span>
                  )
               })}

            </div>
            {
               this.props.users.map((user) => {
                  return (
                     <div key={user.id} className={style.user}>
                        <div className={style.user_left}>
                           <img src={user.photos.small != null ? user.photos.small : userLogo} alt="" />
                           {user.followed === true ? <button onClick={() => { this.props.unfollow(user.id) }}>unfollow</button> : <button onClick={() => { this.props.follow(user.id) }}>follow</button>}

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
}

export default Users