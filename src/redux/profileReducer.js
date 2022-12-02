import { profileApi } from "../api/api"

const ADD_POST_DATA = 'ADD-POST-DATA'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const SET_USER_PROFILE_DATA = 'SET_USER_PROFILE_DATA'

let initialState = {
   postData: [
      { message: 'first text', likes: 10, id: 1, key: 1 },
      { message: 'second text', likes: 15, id: 2, key: 2 },
      { message: 'last text', likes: 20, id: 3, key: 3 },
   ],
   newPostText: '',
   userData: null
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST_DATA:
         {
            return {
               ...state,
               newPostText: "",
               postData: [...state.postData, { message: state.newPostText, likes: 12, id: 4, key: 4, }]
            }
         }
      case CHANGE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.text
         }
      }
      case SET_USER_PROFILE_DATA: {
         return {
            ...state,
            userData: action.data
         }
      }
      default:
         return state
   }
}


export const addPostActionCreator = () => {
   return {
      type: ADD_POST_DATA
   }
}
export const changePostTextActionCreator = (text) => {
   return {
      type: CHANGE_NEW_POST_TEXT, text: text
   }
}
export const setUserProfileData = (data) => {
   return {
      type: SET_USER_PROFILE_DATA, data
   }
}

export const getProfileUsserdataThunk = (userId) => {
   return (dispatch) => {
      profileApi.getProfileUsserdata(userId).then((data) => {
         dispatch(setUserProfileData(data))
      })
   }
}

export default profileReducer