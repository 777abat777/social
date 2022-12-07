import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import authReducer from "./auth-Reducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./users-Reducer";
import thunkMiddleware from 'redux-thunk'
import appReducer from "./appReducer";


let reducers = combineReducers({
   dialogsPage: dialogsReducer,
   profilePage: profileReducer,
   sidebar: sidebarReducer,
   usersPage: usersReducer,
   auth: authReducer,
   app: appReducer
})

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store