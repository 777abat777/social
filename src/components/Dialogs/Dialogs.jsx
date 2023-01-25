import style from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import React from 'react'
import { useForm } from "react-hook-form";
import { useAppSelector, useAppDispatch } from '../../hook/hook';
import { addNewMessage } from '../../store/DialogsSlice/DialogSlice';


const Dialogs = (props) => {
   let dialogs = useAppSelector(state => state.dialogs.dialogsData)
   let messages = useAppSelector(state => state.dialogs.messageData)
   const dispatch = useAppDispatch()
   const { register,
      handleSubmit,
      formState: { errors },
      reset
   } = useForm({ mode: "onChange" });


   const onSubmit = (data) => {
      dispatch(addNewMessage(data.message))
      reset()
   }

   return (
      <div className={style.dialogs}>
         <div className={style.dialogs__items}>
            {dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} key={dialog.id} />)}
         </div>
         <div className={style.messages}>
            {messages.map(message => <Message message={message.message} id={message.id} key={message.message} />)}
            <div className='add__message'>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <p><textarea cols="80" rows="5" {...register('message')} /></p>
                  <button>Отправить</button>

               </form>
            </div>
         </div>
      </div>
   )
}

export default Dialogs