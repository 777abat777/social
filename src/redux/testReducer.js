const SET_USERS = 'testReducer/INITIALIZE_APP'


let initialState = {
   users: {
      name: null,
      status: null,
      id: 1,
   }
}

const testReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USERS:
         {
            return {
               ...state,
               users: [...action]
            }
         }

      default:
         return state
   }
}


export default testReducer