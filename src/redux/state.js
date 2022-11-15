const store = {
   _subscriber() {
      console.log('no subscribe')
   },
   _state: {
      dialogsPage: {
         dialogsData: [
            { name: 'Dima', id: 1 },
            { name: 'Masha', id: 2 },
            { name: 'Sasha', id: 3 },
            { name: 'Sasha', id: 3 },
         ],
         messageData: [
            { message: 'Hi', id: 1 },
            { message: 'Hello', id: 1 },
            { message: 'some text', id: 1 },
         ],
         messageText: ''
      },
      profilePage: {
         postData: [
            { message: 'first text', likes: 10, id: 1, key: 1 },
            { message: 'second text', likes: 15, id: 2, key: 2 },
            { message: 'last text', likes: 20, id: 3, key: 3 },
         ],
         newPostText: ''
      }
   },
   subscribe(observer) {
      this._subscriber = observer
   },
   gerState() {
      return this._state
   },
   addPostData() {
      let newPost = {
         message: this._state.profilePage.newPostText,
         likes: 12,
         id: 4,
         key: 4,
      }
      this._state.profilePage.postData.push(newPost)
      this._state.profilePage.newPostText = ""
      this._subscriber(this._state)
   },
   changeNewPostText(text) {
      this._state.profilePage.newPostText = text
      this._subscriber(this._state)
   },
   addNewMessage() {
      let newMessage = {
         message: this._state.dialogsPage.messageText,
         likes: 10,
         id: 1,
         key: 1,
      }
      this._state.dialogsPage.messageData.push(newMessage)
      this._state.dialogsPage.messageText = ''
      this._subscriber(this._state)
   },
   changeNewMessageText(text) {
      this._state.dialogsPage.messageText = text
      this._subscriber(this._state)
   },
}


export default store
