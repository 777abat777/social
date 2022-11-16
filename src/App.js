import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Photo from './components/Photo/Photo'

const App = (props) => {

   return (
      <BrowserRouter>
         <div className="wrapper">
            <Header />
            <NavBar />
            <Routes>
               <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
               <Route path='/dialogs*' element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />} />
               <Route path='/photo' element={<Photo />} />
            </Routes>
         </div>
      </BrowserRouter>
   );
}



export default App;
