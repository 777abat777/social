const ADD_POST_DATA = 'ADD-POST-DATA'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

let initialState = {
   postData: [
      { message: 'first text', likes: 10, id: 1, key: 1 },
      { message: 'second text', likes: 15, id: 2, key: 2 },
      { message: 'last text', likes: 20, id: 3, key: 3 },
   ],
   newPostText: ''
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST_DATA:
         {
            let newState = { ...state }
            newState.postData = [...state.postData]
            let newPost = {
               message: state.newPostText,
               likes: 12,
               id: 4,
               key: 4,
            }
            newState.postData.push(newPost)
            newState.newPostText = ""
            return newState
         }
      case CHANGE_NEW_POST_TEXT: {
         let newState = { ...state }
         newState.newPostText = action.text
         return newState
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

export default profileReducer