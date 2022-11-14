let rerenderTree

export let stateRender = (render) => {
   rerenderTree = render
}

const state = {
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
}

export let addPostData = () => {
   let newPost = {
      message: state.profilePage.newPostText,
      likes: 12,
      id: 4,
      key: 4,
   }
   state.profilePage.postData.push(newPost)
   state.profilePage.newPostText = ""
   rerenderTree(state)
}

export let changeNewPostText = (text) => {
   state.profilePage.newPostText = text
   rerenderTree(state)
}


export let addNewMessage = () => {
   let newMessage = {
      message: state.dialogsPage.messageText,
      likes: 10,
      id: 1,
      key: 1,
   }
   state.dialogsPage.messageData.push(newMessage)
   state.dialogsPage.messageText = ''
   rerenderTree(state)
}

export let changeNewMessageText = (text) => {
   state.dialogsPage.messageText = text
   rerenderTree(state)
}


export default state

window.state = state