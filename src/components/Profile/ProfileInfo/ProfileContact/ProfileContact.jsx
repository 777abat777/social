import style from './ProfileContact.module.css'
import { useForm } from "react-hook-form";

const ProfileContact = (props) => {
   const { register,
      handleSubmit,
      formState: { errors },
      setError,
      reset,
      clearErrors
   } = useForm({ mode: "onChange" });

   const onSubmit = (data) => {
      props.finishEditContact()
      props.submitFormData(data, 'contact')
      reset()
   }
   let userData = props.userData
   let Cotnacts = Object.entries(userData.contacts).map((el) => { return <Contact social={el[0]} value={el[1]} key={el[0]} /> })
   let ContactsForm = Object.entries(userData.contacts).map((el) => { return <ContactForm social={el[0]} key={el[0]} register={register} value={el[1]} /> })
   return (

      <div className={style.profile_contacts}>
         <div >{props.contactEdit ?
            <form onSubmit={handleSubmit(onSubmit)} className={style.profile_data_form}>
               {ContactsForm}
               <div className={style.button_container}>
                  <button >Сохранить</button>
                  <button onClick={props.finishEditContact}>Отмена</button>
               </div>
            </form>
            : <div className={style.profile_data_description}>{Cotnacts}</div>}
         </div>
         {props.contactEdit ? null : props.isAuthUser ? <button onClick={props.editContact}>Редактировать</button> : null}
      </div>



   )
}

export default ProfileContact

const Contact = (props) => {
   return (
      <p><span>{props.social}:</span> <span>{props.value || 'Не указано'}</span></p>
   )
}

const ContactForm = (props) => {
   return (
      <p>
         <label htmlFor={props.social}>{props.social}</label>
         <input defaultValue={props.value} type="text" {...props.register(props.social)} id={props.social} />
      </p >
   )
}