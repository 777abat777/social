import style from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import React from 'react'




let messageRef = React.createRef()

const Dialogs = (props) => {
   console.log(props)
   let dialogsData = props.dialogsPage.dialogsData
   let messageData = props.dialogsPage.messageData


   const dialogs = dialogsData.map((dialog) => { return (<Dialog name={dialog.name} id={dialog.id} />) })
   const messages = messageData.map((message) => { return <Message message={message.message} id={message.id} /> })


   const addMessage = () => {
      props.addNewMessage()
   }

   let ChangeMessageText = () => {
      let text = messageRef.current.value
      props.changeNewMessageText(text)
   }


   return (
      <div className={style.dialogs}>
         <div className={style.dialogs__items}>
            {dialogs}
         </div>
         <div className={style.messages}>
            {messages}
            <div className='add__message'>
               <textarea ref={messageRef} name="" id="" cols="80" rows="5" value={props.dialogsPage.messageText} onChange={ChangeMessageText} ></textarea>
               <button onClick={addMessage}>Отправить</button>
            </div>
         </div>

      </div>
   )
}

export default Dialogs