const ADD_NEW_MESSAGE = 'dialogsReducer/ADD-NEW-MESSAGE'

let initialState = {
   dialogsData: [
      { name: 'Dima', id: 1 },
      { name: 'Masha', id: 2 },
      { name: 'Sasha', id: 3 },
      { name: 'Sasha', id: 4 },
   ],
   messageData: [
      { message: 'Hi', id: 1 },
      { message: 'Hello', id: 2 },
      { message: 'some text', id: 3 },
   ],
}

// const dialogsReducer = (state = initialState, action) => {
//    switch (action.type) {
//       case ADD_NEW_MESSAGE: {
//          let newState = { ...state }
//          newState.messageData = [...state.messageData]
//          let newMessage = {
//             message: state.messageText,
//             likes: 10,
//             id: 1,
//             key: 1,
//          }
//          newState.messageData.push(newMessage)
//          newState.messageText = ''
//          return newState
//       }
//       case CHANGE_NEW_MESSAGE_TEXT: {
//          let newState = { ...state }
//          newState.messageText = action.text
//          return newState
//       }
//       default:
//          return state
//    }
// }

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_NEW_MESSAGE: {
         return {
            ...state,
            messageData: [...state.messageData, { message: action.message, likes: 10, id: 10, key: 1, }]
         }
      }
      default:
         return state
   }
}



export const addMessage = (message) => {
   return {
      type: ADD_NEW_MESSAGE,
      message

   }
}

export default dialogsReducer