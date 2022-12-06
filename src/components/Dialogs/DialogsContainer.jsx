import Dialogs from './Dialogs'

import { addMessage } from '../../redux/dialogsReducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../HOC/withAuthRedirect'
import { compose } from 'redux'


let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
   }
}

// let DialogsWithAuthRedirect = withAuthRedirect(Dialogs)

// let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWithAuthRedirect)
// export default DialogsContainer

export default compose(
   connect(mapStateToProps, { addMessage }),
   withAuthRedirect
)(Dialogs)