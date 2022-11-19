const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
   users: [

   ]
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
         console.log(action.users)
         return {
            ...state,
            users: [...state.users, ...action.users,]

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

export default usersReducer