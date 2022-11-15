import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Photo from './components/Photo/Photo'
import store from './redux/state';

const App = (props) => {
   // console.log(props.state)
   // console.log(props.store)
   return (
      <BrowserRouter>
         <div className="wrapper">
            <Header />
            <NavBar />
            <Routes>
               <Route path='/profile' element={<Profile profilePage={props.state.profilePage} addPostData={props.store.addPostData.bind(store)} changeNewPostText={props.store.changeNewPostText.bind(store)} />} />
               <Route path='/dialogs*' element={<Dialogs dialogsPage={props.state.dialogsPage} changeNewMessageText={props.store.changeNewMessageText.bind(store)} addNewMessage={props.store.addNewMessage.bind(store)} />} />
               <Route path='/photo' element={<Photo />} />
            </Routes>
         </div>
      </BrowserRouter>
   );
}



export default App;
