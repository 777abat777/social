import Dialogs from './Dialogs'

import { addMessageActionCreator, ChangeMessageTextActionCreator } from '../../redux/dialogsReducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../HOC/withAuthRedirect'
import { compose } from 'redux'


let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
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
// let DialogsWithAuthRedirect = withAuthRedirect(Dialogs)

// let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWithAuthRedirect)
// export default DialogsContainer

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(Dialogs)