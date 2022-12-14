import style from './ProfileHeader.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage } from '@fortawesome/free-solid-svg-icons'
import { Image } from 'antd';
import userNoPhoto from './../../../../assets/image/user.png'

const ProfileHeader = (props) => {
   const changePhoto = (e) => {
      if (e.currentTarget.files.length) {
         let file = e.currentTarget.files[0]
         props.setPhoto(file)
      }
   }
   return (
      <div className={style.profile__cover}>
         <div className={style.status_container}>
            <ProfileStatus userStatus={props.userStatus} updateProfileUsserStatusThunk={props.updateProfileUsserStatusThunk} />
         </div>
         <div className={style.image_block}>
            <h2>{props.userData.fullName}</h2>
            <Image className={style.profile__img} width={200} src={props.userData.photos.large || userNoPhoto} preview={{ maskClassName: "mask_image" }} />
            {props.isAuthUser &&
               <div className={style.image_options}>
                  <input className={style.image_options_input} type={'file'} onChange={changePhoto} id='img' />
                  <label className={style.image_options_label} htmlFor="img">
                     <span className={style.label__icon}><FontAwesomeIcon icon={faFileImage} /></span>
                     <span className={style.label__text}>Изменить фото</span>
                  </label>
               </div>
            }
         </div>
      </div>
   )
}

export default ProfileHeader