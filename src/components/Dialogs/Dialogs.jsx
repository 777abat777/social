import style from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import React from 'react'

// let messageRef = React.createRef()

const Dialogs = (props) => {
   const dialogs = props.dialogsPage.dialogsData.map((dialog) => { return (<Dialog name={dialog.name} id={dialog.id} key={dialog.id} />) })
   const messages = props.dialogsPage.messageData.map((message) => { return <Message message={message.message} id={message.id} key={message.id} /> })

   const addMessage = () => {
      props.addMessage()
   }

   let ChangeMessageText = (e) => {
      let text = e.target.value
      // let text = messageRef.current.value
      props.ChangeMessageText(text)
   }


   return (
      <div className={style.dialogs}>
         <div className={style.dialogs__items}>
            {dialogs}
         </div>
         <div className={style.messages}>
            {messages}
            <div className='add__message'>
               <textarea  /*ref={messageRef} тут реф*/ name="" id="" cols="80" rows="5" value={props.dialogsPage.messageText} onChange={ChangeMessageText} ></textarea>
               <button onClick={addMessage}>Отправить</button>
            </div>
         </div>
      </div>
   )
}

export default Dialogs