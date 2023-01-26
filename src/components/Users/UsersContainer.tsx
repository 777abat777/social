import Users from "./Users";
import React from 'react'
import Preloader from "../common/Preloader/Preloader";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { changePage, fetchUsers, followToggleTunk, resetPage } from "../../store/UsersSlice/UserSlice";
import { useEffect } from 'react';


const UsersContainer: React.FC = () => {
   let dispatch = useAppDispatch()
   let users = useAppSelector(state => state.users.users)
   let totalUserCount = useAppSelector(state => state.users.totalUserCount)
   let pageSize = useAppSelector(state => state.users.pageSize)
   let currentPage = useAppSelector(state => state.users.currentPage)
   let loading = useAppSelector((state) => state.users.loading)
   let error = useAppSelector((state) => state.users.error)
   let followingInProgress = useAppSelector((state) => state.users.followingInProgress)
   let followingUsers = useAppSelector((state) => state.users.followingUsers)



   useEffect(() => {
      // component mount
      dispatch(fetchUsers({ pageSize: 10, page: 1 }))
      return () => {
         // Anything in here is fired on component unmount.
         dispatch(resetPage())
      }
   }, [dispatch])

   let changeCurrentPage = (page: number) => {
      dispatch(changePage(page))
      dispatch(fetchUsers({ pageSize, page }))
   }
   let followUser = (id: number) => {
      dispatch(followToggleTunk({ id, followCase: 'follow' }))
   }
   let unFollowUser = (id: number) => {
      dispatch(followToggleTunk({ id, followCase: 'unfollow' }))
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
            followUser={followUser}
            unFollowUser={unFollowUser}
            followingInProgress={followingInProgress}
            followingUsers={followingUsers}
         />
      </div>
   )
}

export default UsersContainer