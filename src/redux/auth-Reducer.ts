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

const authReducer = (state = initialState, action: any) => {
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


export const setCaptchaValue = (value: any) => {
   return {
      type: SET_CAPTCHA_VALUE,
      value
   }
}
export const setCaptchaUrl = (url: any) => {
   return {
      type: SET_CAPTCHA_URL,
      url
   }
}
export const setUserData = (id: any, login: any, email: any, isAuth: any) => {
   return {
      type: SET_USER_DATA,
      data: { id, login, email, isAuth }
   }
}


export const getUserDataThunk = () => {
   return (dispatch: any) => {
      return headerApi.getUsserdata().then((data) => {
         if (data.resultCode === 0) {
            let { email, id, login, } = data.data
            dispatch(setUserData(id, login, email, true))
         }
      })
   }
}
export const loginUserThunk = (email: any, password: any, rememberMe: any, captcha: any, setError: any) => {
   return (dispatch: any) => {
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
   return (dispatch: any) => {
      headerApi.logout().then((data) => {
         if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
         }
      })
   }
}
export const getCaptcha = () => {
   return (dispatch: any) => {
      headerApi.getCaptcha().then((data) => {
         dispatch(setCaptchaUrl(data.url))
         dispatch(setCaptchaValue(true))
      })
   }
}

export default authReducer