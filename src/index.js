import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPostData, changeNewPostText, addNewMessage, changeNewMessageText, stateRender } from './redux/state';
import state from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderTree = () => {
   root.render(
      <React.StrictMode>
         <App state={state} addPostData={addPostData} changeNewPostText={changeNewPostText} addNewMessage={addNewMessage} changeNewMessageText={changeNewMessageText} />
      </React.StrictMode>
   );
}

rerenderTree()

stateRender(rerenderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
