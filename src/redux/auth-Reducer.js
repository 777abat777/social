import { headerApi } from "../api/api"

const SET_USER_DATA = 'auth-Reducer/SET_USER_DATA'
const SET_CAPTCHA_VALUE = 'auth-Reducer/SET_CAPTCHA_VALUE'
const SET_CAPTCHA_URL = 'auth-Reducer/SET_CAPTCHA_URL'


let initialState = {
   id: null,
   login: null,
   email: null,
   isAuth: false,
   showCaptcha: false,
   captchaUrl: null
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
      case SET_CAPTCHA_VALUE:
         {
            return {
               ...state,
               showCaptcha: action.value
            }
         }
      case SET_CAPTCHA_URL:
         {
            return {
               ...state,
               captchaUrl: action.url
            }
         }

      default:
         return state
   }
}


export const setCaptchaValue = (value) => {
   return {
      type: SET_CAPTCHA_VALUE,
      value
   }
}
export const setCaptchaUrl = (url) => {
   return {
      type: SET_CAPTCHA_URL,
      url
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
      return headerApi.getUsserdata().then((data) => {
         if (data.resultCode === 0) {
            let { email, id, login, } = data.data
            dispatch(setUserData(id, login, email, true))
         }
      })
   }
}
export const loginUserThunk = (email, password, rememberMe, captcha, setError) => {
   return (dispatch) => {
      headerApi.login(email, password, rememberMe, captcha).then((data) => {
         if (data.resultCode === 0) {
            headerApi.getUsserdata().then((data) => {
               if (data.resultCode === 0) {
                  let { email, id, login, } = data.data
                  dispatch(setUserData(id, login, email, true))
                  dispatch(setCaptchaValue(false))
               }
            })
         }
         else if (data.resultCode === 10) {
            dispatch(getCaptcha())
            setError('server', {
               message: data.messages
            })

         }
         else {
            setError('server', {
               message: data.messages
            })
         }

      }
      )
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
export const getCaptcha = () => {
   return (dispatch) => {
      headerApi.getCaptcha().then((data) => {
         dispatch(setCaptchaUrl(data.url))
         dispatch(setCaptchaValue(true))
      })
   }
}

export default authReducer