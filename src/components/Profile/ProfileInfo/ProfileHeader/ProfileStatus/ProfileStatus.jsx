import { useEffect } from "react"
import { useState } from "react"

const ProfileStatus = (props) => {
   let [editMode, setEditMode] = useState(false)
   let [status, setStatus] = useState(props.userStatus)
   useEffect(() => {
      setStatus(props.userStatus)
   }, [props.userStatus])
   const editModeOn = () => {
      if (props.isAuthUser) {
         setEditMode(true)
      }
   }
   const editModeof = () => {
      setEditMode(false)
      props.updateProfileUsserStatusThunk(status)
   }
   const changeStatus = (e) => {
      let currentStatus = e.currentTarget.value
      setStatus(currentStatus)
   }
   return (
      <div>
         {editMode && <input onBlur={editModeof} autoFocus={true} value={status} onChange={changeStatus} />}
         {!editMode && <h2 onClick={editModeOn}>{status || 'some status'} </h2>}
      </div>
   )

}

export default ProfileStatus