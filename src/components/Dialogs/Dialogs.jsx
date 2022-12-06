import style from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import React from 'react'
import { useForm } from "react-hook-form";


const Dialogs = (props) => {
   const dialogs = props.dialogsPage.dialogsData.map((dialog) => { return (<Dialog name={dialog.name} id={dialog.id} key={dialog.id} />) })
   const messages = props.dialogsPage.messageData.map((message) => { return <Message message={message.message} id={message.id} key={message.message} /> })


   const { register,
      handleSubmit,
      formState: { errors },
      reset
   } = useForm({ mode: "onChange" });


   const onSubmit = (data) => {
      props.addMessage(data.message)
      reset()
   }


   return (
      <div className={style.dialogs}>
         <div className={style.dialogs__items}>
            {dialogs}
         </div>
         <div className={style.messages}>
            {messages}
            <div className='add__message'>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <p><textarea cols="80" rows="5" {...register('message')} /></p>
                  <button>Отправить</button>
               </form>
               {/* <textarea name="" id="" cols="80" rows="5" value={props.dialogsPage.messageText} onChange={ChangeMessageText} ></textarea>
               <button onClick={addMessage}>Отправить</button> */}
            </div>
         </div>
      </div>
   )
}

export default Dialogs