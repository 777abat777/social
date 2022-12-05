import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfileUsserdataThunk, getProfileUsserStatusThunk, updateProfileUsserStatusThunk, setUserStatus } from './../../redux/profileReducer'
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
         userId = 26833
      }
      this.props.getProfileUsserdataThunk(userId)
      // this.props.getProfileUsserStatusThunk(userId)

   }
   componentWillUnmount() {

   }

   render() {
      return (!(this.props.userData) ? <Preloader /> : <Profile userData={this.props.userData} userStatus={this.props.userStatus} updateProfileUsserStatusThunk={this.props.updateProfileUsserStatusThunk} />)
   }

}

let mapStateToProps = (state) => {
   return {
      userData: state.profilePage.userData,
      userStatus: state.profilePage.userStatus
   }
}

export default compose(
   connect(mapStateToProps, {
      getProfileUsserdataThunk,
      // getProfileUsserStatusThunk,
      updateProfileUsserStatusThunk,
      setUserStatus
   }),
   // withAuthRedirect,
   withRouter
)(ProfileContainer)

// let ProfileContainerWithRouter = withRouter(ProfileContainer)
// let ProfileContainerWithRedirect = withAuthRedirect(ProfileContainerWithRouter)
// export default ProfileContainer = connect(mapStateToProps, {
//    getProfileUsserdataThunk
// })(ProfileContainerWithRedirect)
