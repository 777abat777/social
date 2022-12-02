import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { getUserDataThunk } from './../../redux/auth-Reducer'


class HeaderContainer extends React.Component {
   constructor(props) {
      super(props)
   }
   componentDidMount() {
      this.props.getUserDataThunk()
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
export default connect(mapStateToProps, { getUserDataThunk })(HeaderContainer)