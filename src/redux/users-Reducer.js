import { usersApi } from "../api/api"

const FOLLOW = 'usersReducer/FOLLOW'
const UNFOLLOW = 'usersReducer/UNFOLLOW'
const SET_USERS = 'usersReducer/SET-USERS'
const SET_USERS_TOTAL_COUNT = 'usersReducer/SET_USERS_TOTAL_COUNT'
const CHANGE_PAGE = "usersReducer/CHANGE_PAGE"
const RESET_PAGE = "usersReducer/RESET_PAGE"
const LOADING_USERS = "usersReducer/LOADING_USERS"
const FOLLOWING_USERS = 'usersReducer/FOLLOWING_USERS'

let initialState = {
   users: [

   ],
   pageSize: 7,
   currentPage: 1,
   totalUserCount: 50,
   isLoadingUsers: true,
   followingProgress: []
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         {
            return {
               ...state,
               users: state.users.map((user) => {
                  if (user.id === action.userid) {
                     return { ...user, followed: true }
                  }
                  return user
               })
            }
         }
      case UNFOLLOW: {
         return {
            ...state,
            users: state.users.map((user) => {
               if (user.id === action.userid) {
                  return { ...user, followed: false }
               }
               return user
            })
         }
      }
      case SET_USERS: {

         return {
            ...state,
            users: [...action.users,]  // users: [...state.users, ...action.users,]

         }
      }
      case SET_USERS_TOTAL_COUNT: {
         return {
            ...state,
            totalUserCount: action.userscount

         }
      }
      case CHANGE_PAGE: {
         return {
            ...state,
            currentPage: action.currentPage

         }
      }
      case RESET_PAGE: {
         return {
            ...state,
            currentPage: 1

         }
      }
      case LOADING_USERS: {
         return {
            ...state,
            isLoadingUsers: action.isLoadingUsers

         }
      }
      case FOLLOWING_USERS: {
         return {
            ...state,
            followingProgress: action.isFetching
               ? [...state.followingProgress, action.userId]
               : state.followingProgress.filter((id) => id !== action.userId)

         }
      }
      default:
         return state
   }
}


export const follow = (userid) => {
   return {
      type: FOLLOW,
      userid: userid
   }
}
export const unfollow = (userid) => {
   return {
      type: UNFOLLOW,
      userid: userid
   }
}
export const setUsers = (users) => {
   return {
      type: SET_USERS,
      users: users
   }
}
export const setUsersTotalCount = (userscount) => {
   return {
      type: SET_USERS_TOTAL_COUNT,
      userscount: userscount
   }
}
export const changePage = (currentPage) => {
   return {
      type: CHANGE_PAGE,
      currentPage: currentPage
   }
}
export const resetPage = () => {
   return {
      type: RESET_PAGE,
   }
}
export const loadingUsers = (isLoadingUsers) => {
   return {
      type: LOADING_USERS,
      isLoadingUsers: isLoadingUsers
   }
}
export const followingUsers = (userId, isFetching) => {
   return {
      type: FOLLOWING_USERS,
      userId,
      isFetching
   }
}

export const getUsersThunkCreator = (pageSize, currentPage) => {
   return (dispatch) => {
      dispatch(loadingUsers(true))
      usersApi.getUssers(pageSize, currentPage).then((data) => {
         dispatch(setUsers(data.items))
         dispatch(setUsersTotalCount(data.totalCount))
         dispatch(loadingUsers(false))
      })
   }
}

export const followthunk = (userId) => {
   return (dispatch) => {
      dispatch(followingUsers(userId, true))
      usersApi.followRequest(userId).then((response) => {
         if (response.data.resultCode === 0) {
            dispatch(follow(userId))

         }
         dispatch(followingUsers(userId, false))
      })
   }
}
export const unfollowthunk = (userId) => {
   return (dispatch) => {
      dispatch(followingUsers(userId, true))
      usersApi.unfollowRequest(userId).then((response) => {
         if (response.data.resultCode === 0) {
            dispatch(unfollow(userId))

         }
         dispatch(followingUsers(userId, false))
      })
   }
}

export default usersReducer