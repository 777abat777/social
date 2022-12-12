
import { getUserDataThunk } from "./auth-Reducer"

const INITIALIZE_APP = 'appReducer/INITIALIZE_APP'


let initialState = {
   initialaize: false
}

const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case INITIALIZE_APP:
         {
            return {
               ...state,
               initialaize: true
            }
         }

      default:
         return state
   }
}


export const initialaizeSucces = () => {

   return {
      type: INITIALIZE_APP
   }
}
export const initialaizeApp = () => {
   return (dispatch) => {
      let promise = dispatch(getUserDataThunk())
      Promise.all([promise]).then(() => {
         dispatch(initialaizeSucces())
      })
   }
}

export default appReducer