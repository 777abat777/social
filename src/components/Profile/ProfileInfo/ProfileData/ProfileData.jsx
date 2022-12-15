import style from './ProfileData.module.css'
import userNoPhoto from './../../../../assets/image/user.png'
import { useForm } from "react-hook-form";

const ProfileData = (props) => {
   const { register,
      handleSubmit,
      formState: { errors },
      setError,
      reset,
      clearErrors
   } = useForm({ mode: "onChange" });

   const onSubmit = (data) => {
      props.finishEditData()
      props.submitFormData(data, 'profileData')
      reset()
   }
   let userData = props.userData
   return (
      <div className={style.profile_data}>
         {props.dataEditValue ?
            <form onSubmit={handleSubmit(onSubmit)} className={style.profile_data_form}>
               <InfoInput register={register} defaultValue={userData.fullName} name={'fullName'} />
               <InfoInput register={register} defaultValue={userData.aboutMe} name={'aboutMe'} />
               <p>
                  <label htmlFor="lookingForAJob">lookingForAJob:</label>
                  <select id="lookingForAJob" {...register('lookingForAJob')}>
                     <option value={true}>Ищу</option>
                     <option value={false}>Не ищу</option>
                  </select>
               </p>
               <InfoInput register={register} defaultValue={userData.lookingForAJobDescription} name={'lookingForAJobDescription'} />
               <div className={style.button_container}>
                  <button>Сохранить</button>
                  <button onClick={props.finishEditData}>Отмена</button>
               </div>
            </form>
            :
            <div >
               <div className={style.profile_data_description}>
                  <img className={style.small_img} src={userData.photos.small || userNoPhoto} alt="" />
                  <p>Полное имя: {userData.fullName || 'name'}</p>
                  <p>Обо мне: {userData.aboutMe || 'about'}</p>
                  <p>Работа: {userData.lookingForAJob ? 'В поиске работы' : 'Не ищу работу'}</p>
                  <p>Почему ищу: {userData.lookingForAJobDescription || 'просто так'}</p>
               </div>
               <button onClick={props.editData}>Редактировать</button>
            </div>
         }
      </div>
   )
}

const InfoInput = (props) => {
   return (
      <p>
         <label htmlFor={props.name}>{props.name}</label>
         <input defaultValue={props.defaultValue} type="text" {...props.register(props.name)} id={props.name} />
      </p >
   )
}

export default ProfileData
