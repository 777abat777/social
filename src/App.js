import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Photo from './components/Photo/Photo'
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {

   return (
      <BrowserRouter>
         <div className="wrapper">
            <Header />
            <NavBar />
            <Routes>
               <Route path='/profile' element={<Profile />} />
               {/* <Route path='/dialogs*' element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />} /> */}
               <Route path='/dialogs*' element={<DialogsContainer />} />
               <Route path='/photo' element={<Photo />} />
            </Routes>
         </div>
      </BrowserRouter>
   );
}



export default App;
