import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export type DialogsDataType = {
   name: string,
   id: number
}
export type MessageDataType = {
   message: string,
   id: number
}

// Define a type for the slice state
interface DialogsState {
   dialogsData: Array<DialogsDataType>,
   messageData: Array<MessageDataType>
}

// Define the initial state using that type
const initialState: DialogsState = {
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

export const dialogsSlice = createSlice({
   name: 'dialogs',
   initialState,
   reducers: {
      addNewMessage: (state, action: PayloadAction<string>) => {
         state.messageData.push({ message: action.payload, id: 4 })
      },
   },
})

export const { addNewMessage } = dialogsSlice.actions
export default dialogsSlice.reducer