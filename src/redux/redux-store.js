import { combineReducers, legacy_createStore } from "redux";
import authReducer from "./auth-Reducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./users-Reducer";

let reducers = combineReducers({
   dialogsPage: dialogsReducer,
   profilePage: profileReducer,
   sidebar: sidebarReducer,
   usersPage: usersReducer,
   auth: authReducer
})

let store = legacy_createStore(reducers)

// window.store = store

export default store