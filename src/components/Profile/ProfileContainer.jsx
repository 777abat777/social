import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfileUsserdataThunk, getProfileUsserStatusThunk, updateProfileUsserStatusThunk, setUserStatus, setPhoto, UpdateProfileUserData } from './../../redux/profileReducer'
import Preloader from '../common/Preloader/Preloader'
import { withRouter } from '../HOC/withRouter/withRouter'
import { withAuthRedirect } from '../HOC/withAuthRedirect'
import { compose } from 'redux'


class ProfileContainer extends React.Component {
   constructor(props) {
      super(props)
   }
   refreshData() {
      let userId = this.props.router.params.userId
      if (!userId) {
         userId = this.props.authUserId

      }
      this.props.getProfileUsserdataThunk(userId)
   }
   componentDidMount() {
      this.refreshData()

   }
   componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.router.params.userId !== prevProps.router.params.userId) {
         this.refreshData()
      }
   }

   render() {

      return (!(this.props.userData) ? <Preloader /> : <Profile getProfileUsserdataThunk={this.props.getProfileUsserdataThunk} UpdateProfileUserData={this.props.UpdateProfileUserData} setPhoto={this.props.setPhoto} isAuthUser={!this.props.router.params.userId} userData={this.props.userData} userStatus={this.props.userStatus} updateProfileUsserStatusThunk={this.props.updateProfileUsserStatusThunk} />)
   }

}

let mapStateToProps = (state) => {
   return {
      userData: state.profilePage.userData,
      userStatus: state.profilePage.userStatus,
      authUserId: state.auth.id,
   }
}

export default compose(
   connect(mapStateToProps, {
      getProfileUsserdataThunk,
      // getProfileUsserStatusThunk,
      updateProfileUsserStatusThunk,
      setUserStatus,
      setPhoto,
      UpdateProfileUserData
   }),
   withAuthRedirect,
   withRouter
)(ProfileContainer)

// let ProfileContainerWithRouter = withRouter(ProfileContainer)
// let ProfileContainerWithRedirect = withAuthRedirect(ProfileContainerWithRouter)
// export default ProfileContainer = connect(mapStateToProps, {
//    getProfileUsserdataThunk
// })(ProfileContainerWithRedirect)
