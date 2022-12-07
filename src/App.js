import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Photo from './components/Photo/Photo'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { useEffect, useState } from 'react';
import Preloader from './components/common/Preloader/Preloader';
import { connect } from 'react-redux';
import { initialaizeApp } from './redux/appReducer'


const App = (props) => {
   useEffect(() => {
      props.initialaizeApp()
   });
   if (!props.initialaize) { return (<Preloader />) }
   return (

      <div className="wrapper">
         <HeaderContainer />
         <div className='container'>
            <div className="content">
               <NavBar />
               <div className="main">
                  <Routes>
                     <Route path='/profile/:userId' element={<ProfileContainer />} />
                     <Route path='/profile/' element={<ProfileContainer />} />
                     <Route path='/dialogs*' element={<DialogsContainer />} />
                     <Route path='/users' element={<UsersContainer />} />
                     <Route path='/photo' element={<Photo />} />
                     <Route path='/login' element={<Login />} />
                  </Routes>
               </div>
            </div>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      initialaize: state.app.initialaize
   }
}

export default connect(mapStateToProps, { initialaizeApp })(App)
