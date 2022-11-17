
import React from 'react'
import Dialogs from './Dialogs'

import { addMessageActionCreator, ChangeMessageTextActionCreator } from '../../redux/dialogsReducer'
import { connect } from 'react-redux'



// const  = (props) => {
//    let state = props.store.getState()

//    const addMessage = () => {
//       props.store.
//    }

//    let ChangeMessageText = (text) => {
//       props.store.
//    }


//    return (<Dialogs addMessage={addMessage} ChangeMessageText={ChangeMessageText} dialogsPage={state.dialogsPage} />)
// }

let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      addMessage() {
         dispatch(addMessageActionCreator())
      },
      ChangeMessageText(text) {
         dispatch(ChangeMessageTextActionCreator(text))
      }
   }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer