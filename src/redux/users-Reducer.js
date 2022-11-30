const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const CHANGE_PAGE = "CHANGE_PAGE"
const RESET_PAGE = "RESET_PAGE"
const LOADING_USERS = "LOADING_USERS"
const FOLLOWING_USERS = 'FOLLOWING_USERS'

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

export default usersReducer