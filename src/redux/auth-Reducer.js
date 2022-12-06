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
            }
         }

      default:
         return state
   }
}


export const setUserData = (id, login, email, isAuth) => {
   return {
      type: SET_USER_DATA,
      data: { id, login, email, isAuth }
   }
}

export const getUserDataThunk = () => {
   return (dispatch) => {
      headerApi.getUsserdata().then((data) => {
         if (data.resultCode === 0) {
            let { email, id, login, } = data.data
            dispatch(setUserData(id, login, email, true))
         }
      })
   }
}
export const loginUserThunk = (email, password, rememberMe) => {
   return (dispatch) => {
      headerApi.login(email, password, rememberMe).then((data) => {
         if (data.resultCode === 0) {
            headerApi.getUsserdata().then((data) => {
               if (data.resultCode === 0) {
                  let { email, id, login, } = data.data
                  dispatch(setUserData(id, login, email, true))
               }
            })
         }
      })
   }
}
export const logoutUserThunk = () => {
   return (dispatch) => {
      headerApi.logout().then((data) => {
         if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
         }
      })
   }
}

export default authReducer