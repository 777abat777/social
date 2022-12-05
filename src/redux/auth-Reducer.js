import { headerApi } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
   id: null,
   login: null,
   email: null,
   isAuth: false,
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         {
            return {
               ...state,
               ...action.data,
               isAuth: true

            }
         }

      default:
         return state
   }
}


export const setUserData = (id, login, email) => {
   return {
      type: SET_USER_DATA,
      data: { id, login, email }
   }
}

export const getUserDataThunk = () => {
   return (dispatch) => {
      headerApi.getUsserdata().then((data) => {
         if (data.resultCode === 0) {
            let { email, id, login } = data.data
            dispatch(setUserData(id, login, email))
         }
      })
   }
}

export default authReducer