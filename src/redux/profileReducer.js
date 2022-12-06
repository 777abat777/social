import { profileApi } from "../api/api"

const ADD_POST_DATA = 'ADD-POST-DATA'
const SET_USER_PROFILE_DATA = 'SET_USER_PROFILE_DATA'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
   postData: [
      { message: 'first text', likes: 10, id: 1, key: 1 },
      { message: 'second text', likes: 15, id: 2, key: 2 },
      { message: 'last text', likes: 20, id: 3, key: 3 },
   ],
   userData: null,
   userStatus: null
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST_DATA:
         {
            return {
               ...state,
               postData: [...state.postData, { message: action.post, likes: 12, id: 4, key: 4, }]
            }
         }
      case SET_USER_PROFILE_DATA: {
         return {
            ...state,
            userData: action.data
         }
      }
      case SET_USER_STATUS: {
         return {
            ...state,
            userStatus: action.status
         }
      }
      default:
         return state
   }
}


export const addPost = (post) => {
   return {
      type: ADD_POST_DATA,
      post
   }
}

export const setUserProfileData = (data) => {
   debugger
   return {
      type: SET_USER_PROFILE_DATA, data
   }
}
export const setUserStatus = (status) => {
   debugger
   return {
      type: SET_USER_STATUS,
      status
   }
}


// export const getProfileUsserdataThunk = (userId) => {
//    return (dispatch) => {
//       profileApi.getProfileUsserdata(userId).then((data) => {
//          dispatch(setUserProfileData(data))
//       })
//    }
// }
export const getProfileUsserdataThunk = (userId) => {
   return (dispatch) => {
      profileApi.getProfileUsserdata(userId).then((data) => {
         profileApi.getProfileUsserStatus(userId).then((status) => {
            dispatch(setUserStatus(status))
            dispatch(setUserProfileData(data))
         })

      })
   }
}
// export const getProfileUsserStatusThunk = (userId) => {
//    return (dispatch) => {
//       profileApi.getProfileUsserStatus(userId).then((status) => {
//          dispatch(setUserStatus(status))
//       })
//    }
// }
export const updateProfileUsserStatusThunk = (status) => {
   return (dispatch) => {
      profileApi.updateProfileUsserStatus(status).then((response) => {
         if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
         }
      })
   }
}

export default profileReducer