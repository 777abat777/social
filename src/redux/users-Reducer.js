const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const CHANGE_PAGE = "CHANGE_PAGE"
let initialState = {
   users: [

   ],
   pageSize: 5,
   currentPage: 1,
   totalUserCount: 4000
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


      default:
         return state
   }
}


export const followAC = (userid) => {
   return {
      type: FOLLOW,
      userid: userid
   }
}
export const unfollowAC = (userid) => {
   return {
      type: UNFOLLOW,
      userid: userid
   }
}
export const setUsersAC = (users) => {
   return {
      type: SET_USERS,
      users: users
   }
}
export const setUsersTotalCountAC = (userscount) => {
   return {
      type: SET_USERS_TOTAL_COUNT,
      userscount: userscount
   }
}
export const changePageAC = (currentPage) => {
   return {
      type: CHANGE_PAGE,
      currentPage: currentPage
   }
}

export default usersReducer