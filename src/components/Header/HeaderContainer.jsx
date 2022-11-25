import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { setUserData } from './../../redux/auth-Reducer'


class HeaderContainer extends React.Component {
   constructor(props) {
      super(props)
   }
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then((response) => {
         if (response.data.resultCode === 0) {
            let { email, id, login } = response.data.data
            this.props.setUserData(id, login, email)
         }
         console.log(response)
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