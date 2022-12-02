
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

let mapStateToPropsForRedirect = (state) => {
   return {
      isAuth: state.auth.isAuth
   }
}

export const withAuthRedirect = (Component) => {
   let ComponentWithAuthRedirect = (props) => {
      if (!props.isAuth) { return <Navigate to="/login" /> }
      return < Component {...props} />
   }
   let ComponentWithAuthRedirectConnect = connect(mapStateToPropsForRedirect)(ComponentWithAuthRedirect)
   return ComponentWithAuthRedirectConnect;
}