import React from 'react'
class ProfileStatus extends React.Component {
   constructor(props) {
      super(props)

   }
   state = {
      editMode: false,
      status: this.props.userStatus,
   }

   changeStatusText = (e) => {
      let target = e.currentTarget
      this.setState({
         status: target.value
      })
   }
   editModeTrue = () => {
      this.setState({
         editMode: true
      })
   }
   editModeFalse = () => {
      this.setState({
         editMode: false
      })
      this.props.updateProfileUsserStatusThunk(this.state.status)
   }

   render() {
      return (
         <div>
            {this.state.editMode ?
               <input onChange={this.changeStatusText} type="text" value={this.state.status} autoFocus={true} onBlur={this.editModeFalse} /> :
               <h2 onClick={this.editModeTrue}>{this.state.status || 'some status'}</h2>}
         </div>
      )
   }
}

export default ProfileStatus