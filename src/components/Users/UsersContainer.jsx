import { connect } from "react-redux";
import Users from "./Users";
import { setUsers, follow, unfollow, setUsersTotalCount, changePage, resetPage, loadingUsers, followingUsers } from './../../redux/users-Reducer'
import React from 'react'
import Preloader from "../common/Preloader/Preloader";
import { usersApi } from "../../api/api";




class UsersContainerApi extends React.Component {
   constructor(props) {
      super(props);
   }
   componentDidMount() {
      this.getUssers()
   }
   componentWillUnmount() {
      this.props.resetPage()
   }
   changeCurrentPage = (page) => {
      this.props.changePage(page)
      this.props.loadingUsers(true)
      usersApi.getUssers(this.props.pageSize, page).then((data) => {
         this.props.setUsers(data.items)
         this.props.loadingUsers(false)
      })
   }
   getUssers = () => {
      this.props.loadingUsers(true)
      usersApi.getUssers(this.props.pageSize, this.props.currentPage).then((data) => {
         this.props.setUsers(data.items)
         // console.log(response.data)
         this.props.setUsersTotalCount(data.totalCount)
         this.props.loadingUsers(false)
      })
   }
   render = () => {
      return (
         <div>
            {this.props.isLoadingUsers ? <Preloader /> : null}

            <Users
               users={this.props.users}
               totalUserCount={this.props.totalUserCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               changeCurrentPage={this.changeCurrentPage}
               unfollow={this.props.unfollow}
               follow={this.props.follow}
               followRequest={usersApi.followRequest}
               unfollowRequest={usersApi.unfollowRequest}
               followingUsers={this.props.followingUsers}
               followingProgress={this.props.followingProgress}
            />
         </div>
      )
   }
}






let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      totalUserCount: state.usersPage.totalUserCount,
      currentPage: state.usersPage.currentPage,
      pageSize: state.usersPage.pageSize,
      isLoadingUsers: state.usersPage.isLoadingUsers,
      followingProgress: state.usersPage.followingProgress
   }
}

const UsersContainer = connect(mapStateToProps,
   {
      follow,
      unfollow,
      setUsers,
      setUsersTotalCount,
      changePage,
      resetPage,
      loadingUsers,
      followingUsers,
   }
)(UsersContainerApi)

export default UsersContainer