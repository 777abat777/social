import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Photo from './components/Photo/Photo'
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { useEffect, useState, Suspense, lazy } from 'react';
import Preloader from './components/common/Preloader/Preloader';
import { initialaizeApp } from './redux/appReducer'
import TestingPage from './components/TestingPage/TestingPage';
import Dialogs from './components/Dialogs/Dialogs';


// const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));

const App = (props) => {
   // useEffect(() => {
   //    props.initialaizeApp()
   // });
   // if (!props.initialaize) { return (<Preloader />) }
   return (

      <div className="wrapper">

         {/* <HeaderContainer /> */}
         <div className='container'>
            <div className="content">
               <NavBar />
               <div className="main">
                  <Suspense fallback={<div>...loading</div>}>
                     <Routes>
                        {/* <Route path='/profile/:userId' element={<ProfileContainer />} />
                        <Route path='/profile/' element={<ProfileContainer />} /> */}
                        <Route path='/dialogs*' element={<Dialogs />} />
                        <Route path='/users' element={<UsersContainer />} />
                        <Route path='/photo' element={<Photo />} />
                        {/* <Route path='/login' element={<Login />} /> */}
                        <Route path='/testingpage' element={<TestingPage />} />
                     </Routes>
                  </Suspense >
               </div>
            </div>
         </div>

      </div>
   );
}

// const mapStateToProps = (state) => {
//    return {
//       initialaize: state.app.initialaize
//    }
// }

// export default connect(mapStateToProps, { initialaizeApp })(App)
export default App
