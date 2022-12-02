import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfileUsserdataThunk } from './../../redux/profileReducer'
import Preloader from '../common/Preloader/Preloader'
import { withRouter } from '../HOC/withRouter/withRouter'
import { withAuthRedirect } from '../HOC/withAuthRedirect'
import { compose } from 'redux'


class ProfileContainer extends React.Component {
   constructor(props) {
      super(props)
   }
   componentDidMount() {
      let userId = this.props.router.params.userId
      if (!userId) {
         userId = 2
      }
      this.props.getProfileUsserdataThunk(userId)
   }
   componentWillUnmount() {

   }
   render() {
      return (!(this.props.userData) ? <Preloader /> : <Profile userData={this.props.userData} />)
   }

}

let mapStateToProps = (state) => {
   return {
      userData: state.profilePage.userData,
   }
}

export default compose(
   connect(mapStateToProps, {
      getProfileUsserdataThunk
   }),
   withAuthRedirect,
   withRouter
)(ProfileContainer)

// let ProfileContainerWithRouter = withRouter(ProfileContainer)
// let ProfileContainerWithRedirect = withAuthRedirect(ProfileContainerWithRouter)
// export default ProfileContainer = connect(mapStateToProps, {
//    getProfileUsserdataThunk
// })(ProfileContainerWithRedirect)
