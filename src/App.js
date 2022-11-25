import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Photo from './components/Photo/Photo'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {

   return (
      <BrowserRouter>
         <div className="wrapper">
            <HeaderContainer />
            <div className='container'>
               <div className="content">
                  <NavBar />
                  <Routes>
                     <Route path='/profile/:userId' element={<ProfileContainer />} />
                     <Route path='/profile/' element={<ProfileContainer />} />
                     {/* <Route path='/dialogs*' element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />} /> */}
                     <Route path='/dialogs*' element={<DialogsContainer />} />
                     <Route path='/users' element={<UsersContainer />} />
                     <Route path='/photo' element={<Photo />} />
                  </Routes>
               </div>
            </div>
         </div>
      </BrowserRouter >
   );
}



export default App;
