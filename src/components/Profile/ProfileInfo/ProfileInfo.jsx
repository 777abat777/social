import style from './ProfileInfo.module.css'
import ProfileHeader from './ProfileHeader/ProfileHeader';
import { useState } from 'react';
import ProfileContact from './ProfileContact/ProfileContact';
import ProfileData from './ProfileData/ProfileData';

const ProfileInfo = (props) => {
   const [contactEdit, setContactEdit] = useState(false)
   const [dataEditValue, setdataEdit] = useState(false)
   const editContact = () => {
      setContactEdit(true)
   }
   const finishEditContact = () => {
      setContactEdit(false)
   }
   const editData = () => {
      setdataEdit(true)
   }
   const finishEditData = () => {
      setdataEdit(false)
   }

   const submitFormData = (data, type) => {
      let putData
      if (type == 'profileData') {
         putData = { ...props.userData, ...data }
      }
      if (type == 'contact') {
         putData = { ...props.userData, contacts: data }
      }
      let promise = props.UpdateProfileUserData(putData)
      promise.then(() => {
         props.getProfileUsserdataThunk(putData.userId)
      })
   }
   return (
      <div className='profile__info' >
         <ProfileHeader setPhoto={props.setPhoto} isAuthUser={props.isAuthUser} userData={props.userData} userStatus={props.userStatus} updateProfileUsserStatusThunk={props.updateProfileUsserStatusThunk} />
         <div className={style.profile_forms}>
            <ProfileData submitFormData={submitFormData} userData={props.userData} finishEditData={finishEditData} editData={editData} dataEditValue={dataEditValue} />
            <ProfileContact submitFormData={submitFormData} userData={props.userData} finishEditContact={finishEditContact} editContact={editContact} contactEdit={contactEdit} />
         </div>
      </div>
   )
}

export default ProfileInfo
