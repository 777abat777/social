import { connect } from "react-redux";
import Users from "./Users";
import { setUsers, follow, unfollow, setUsersTotalCount, changePage, resetPage, loadingUsers } from './../../redux/users-Reducer'
import axios from 'axios'
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
      this.props.loadingUsers(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then((response) => {
         this.props.setUsers(response.data.items)
         this.props.loadingUsers(false)
      })
   }
   getUssers = () => {
      this.props.loadingUsers(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then((response) => {
         this.props.setUsers(response.data.items)
         // console.log(response.data)
         this.props.setUsersTotalCount(response.data.totalCount)
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
   }
)(UsersContainerApi)

export default UsersContainer