import { configureStore } from '@reduxjs/toolkit'
import dialogsReducer from './DialogsSlice/DialogSlice'
import UsersSlice from './UsersSlice/UserSlice'
export const store = configureStore({
   reducer: {
      dialogs: dialogsReducer,
      users: UsersSlice,
   },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch