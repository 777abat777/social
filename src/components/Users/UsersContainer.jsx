import { connect } from "react-redux";
import Users from "./Users";
import { changePage, resetPage, getUsersThunkCreator, followthunk, unfollowthunk } from './../../redux/users-Reducer'
import React from 'react'
import Preloader from "../common/Preloader/Preloader";




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
      this.props.getUsersThunkCreator(this.props.pageSize, page)
   }
   getUssers = () => {
      this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage)
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
               followingProgress={this.props.followingProgress}
               followthunk={this.props.followthunk}
               unfollowthunk={this.props.unfollowthunk}
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
      changePage,
      resetPage,
      getUsersThunkCreator,
      followthunk,
      unfollowthunk
   }
)(UsersContainerApi)

export default UsersContainer