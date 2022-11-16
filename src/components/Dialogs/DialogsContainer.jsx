
import React from 'react'
import Dialogs from './Dialogs'

import { addMessageActionCreator, ChangeMessageTextActionCreator } from '../../redux/dialogsReducer'



const DialogsContainer = (props) => {
   let state = props.store.getState()
   console.log(state)

   const addMessage = () => {
      props.store.dispatch(addMessageActionCreator())
   }

   let ChangeMessageText = (text) => {
      props.store.dispatch(ChangeMessageTextActionCreator(text))
   }


   return (<Dialogs addMessage={addMessage} ChangeMessageText={ChangeMessageText} dialogsPage={state.dialogsPage} />)
}

export default DialogsContainer