import Users from "./Users";
import React from 'react'
import Preloader from "../common/Preloader/Preloader";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { changePage, fetchUsers } from "../../store/UsersSlice/UserSlice";
import { useState, useEffect } from 'react';


const UsersContainer = (props) => {
   let dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(fetchUsers({ pageSize: 10, currentPage: 3 }))
   }, [dispatch])
   let users = useAppSelector(state => state.users.users)
   let totalUserCount = useAppSelector(state => state.users.totalUserCount)
   let pageSize = useAppSelector(state => state.users.pageSize)
   let currentPage = useAppSelector(state => state.users.currentPage)
   let loading = useAppSelector((state) => state.users.loading)
   let error = useAppSelector((state) => state.users.error)


   let changeCurrentPage = (page) => {
      dispatch(changePage(page))
      dispatch(fetchUsers({ pageSize, page }))
   }

   return (
      <div>
         {loading && <Preloader />}
         {error && <h1>{error}</h1>}
         <Users
            users={users}
            totalUserCount={totalUserCount}
            pageSize={pageSize}
            currentPage={currentPage}
            changeCurrentPage={changeCurrentPage}
         // followingProgress={this.props.followingProgress}
         // followthunk={this.props.followthunk}
         // unfollowthunk={this.props.unfollowthunk}
         />
      </div>
   )
}

export default UsersContainer