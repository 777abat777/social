import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { setUserData } from './../../redux/auth-Reducer'
import { headerApi } from '../../api/api'


class HeaderContainer extends React.Component {
   constructor(props) {
      super(props)
   }
   componentDidMount() {
      headerApi.getUsserdata().then((data) => {
         if (data.resultCode === 0) {
            let { email, id, login } = data.data
            this.props.setUserData(id, login, email)
         }
      })
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
export default connect(mapStateToProps, { setUserData })(HeaderContainer)