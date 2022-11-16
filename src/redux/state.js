import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"


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
      },
      sidebar: {}
   },
   subscribe(observer) {
      this._subscriber = observer
   },
   gerState() {
      return this._state
   },
   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
      this._state.sidebar = sidebarReducer(this._state.sidebar, action)
      this._subscriber()
   }
}








export default store
