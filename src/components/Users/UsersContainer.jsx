import { connect } from "react-redux";
import Users from "./UsersC";
import { setUsersAC, followAC, unfollowAC, setUsersTotalCountAC, changePageAC } from './../../redux/users-Reducer'

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      totalUserCount: state.usersPage.totalUserCount,
      currentPage: state.usersPage.currentPage,
      pageSize: state.usersPage.pageSize,
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      follow(userid) {
         dispatch(followAC(userid))
      },
      unfollow(userid) {
         dispatch(unfollowAC(userid))
      },
      setusers(users) {
         dispatch(setUsersAC(users))
      },
      setUsersTotalCount(usersCount) {
         dispatch(setUsersTotalCountAC(usersCount))
      },
      changePage(page) {
         dispatch(changePageAC(page))
      }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer