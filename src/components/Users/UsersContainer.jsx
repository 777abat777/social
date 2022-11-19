import { connect } from "react-redux";
import Users from "./Users";
import { setUsersAC, followAC, unfollowAC } from './../../redux/users-Reducer'

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users
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
      }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer