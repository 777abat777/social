import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Profile from './Profile'
import { setUserProfileData } from './../../redux/profileReducer'
import Preloader from '../common/Preloader/Preloader'
import { withRouter } from '../HOC/withRouter/withRouter'


class ProfileContainer extends React.Component {
   constructor(props) {
      super(props)
   }
   componentDidMount() {
      let userId = this.props.router.params.userId
      if (!userId) {
         userId = 2
      }
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
         this.props.setUserProfileData(response.data)
      })
   }
   componentWillUnmount() {
      console.log(this.props.userData)
   }
   render() {
      return (!(this.props.userData) ? <Preloader /> : <Profile userData={this.props.userData} />)
   }

}

let mapStateToProps = (state) => {
   return {
      userData: state.profilePage.userData
   }
}



export default connect(mapStateToProps, {
   setUserProfileData,
})(withRouter(ProfileContainer))