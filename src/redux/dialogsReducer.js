const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'

let initialState = {
   dialogsData: [
      { name: 'Dima', id: 1 },
      { name: 'Masha', id: 2 },
      { name: 'Sasha', id: 3 },
      { name: 'Sasha', id: 3 },
   ],
   messageData: [
      { message: 'Hi', id: 1 },
      { message: 'Hello', id: 1 },
      { message: 'some text', id: 1 },
   ],
   messageText: ''
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_NEW_MESSAGE: {
         let newState = { ...state }
         newState.messageData = [...state.messageData]
         let newMessage = {
            message: state.messageText,
            likes: 10,
            id: 1,
            key: 1,
         }
         newState.messageData.push(newMessage)
         newState.messageText = ''
         return newState
      }
      case CHANGE_NEW_MESSAGE_TEXT: {
         let newState = { ...state }
         newState.messageText = action.text
         return newState
      }
      default:
         return state
   }


}


export const addMessageActionCreator = () => {
   return {
      type: ADD_NEW_MESSAGE
   }
}
export const ChangeMessageTextActionCreator = (text) => {
   return {
      type: CHANGE_NEW_MESSAGE_TEXT, text: text
   }
}
export default dialogsReducer