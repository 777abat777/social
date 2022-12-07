import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { logoutUserThunk } from './../../redux/auth-Reducer'


class HeaderContainer extends React.Component {
   constructor(props) {
      super(props)
   }
   render() {
      return (
         <Header {...this.props} />
      )
   }

}
let mapStateToProps = (state) => {
   return {
      login: state.auth.login,
      isAuth: state.auth.isAuth

   }
}
export default connect(mapStateToProps, { logoutUserThunk })(HeaderContainer)