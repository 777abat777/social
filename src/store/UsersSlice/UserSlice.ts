import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { usersApi } from "../../api/api"

// Define a type for the slice state
interface UsersStateInterface {
   users: Array<UserType>,
   pageSize: number,
   currentPage: number,
   totalUserCount: number,
   isLoadingUsers: boolean,
   loading: boolean,
   error: string | null | undefined,
   followingInProgress: boolean,
   followingUsers: Array<number>
}

export type UserType = {
   followed: boolean,
   id: number
   name: string
   photos: {}
   loading: null | string
   uniqueUrlName: null | string
}

// Define the initial state using that type
const initialState: UsersStateInterface = {
   users: [],
   pageSize: 10,
   currentPage: 1,
   totalUserCount: 50,
   isLoadingUsers: true,
   loading: false,
   error: null,
   followingInProgress: false,
   followingUsers: []
}
export type ResponseData = {
   error: null,
   items: Array<UserType>,
   totalCount: number
}
export type TypeFetchUsersArguments = {
   pageSize: number,
   page: number
}
export type TypeFollowToggleTunkArguments = {
   id: number,
   followCase: "follow" | "unfollow"
}

export const fetchUsers = createAsyncThunk<ResponseData, TypeFetchUsersArguments, { rejectValue: string }>(
   'users/fetchUsers',
   async (requestdata, { rejectWithValue }) => {
      let { pageSize, page } = requestdata
      const response = await usersApi.getUssers(pageSize, page)
      if (response.status !== 200) {
         return rejectWithValue(`Server error ${response.message}`)
      }
      const data: ResponseData = await response.data
      return data
   }
)
export const followToggleTunk = createAsyncThunk<any, TypeFollowToggleTunkArguments, { rejectValue: string }>(
   'users/folloToggleTunk',
   async (requestdata, { rejectWithValue, dispatch }) => {
      let { id, followCase } = requestdata
      dispatch(followingUsers(id))
      if (followCase === "follow") {
         const response = await usersApi.followRequest(id)
         if (response.status !== 200) {
            return rejectWithValue(`Server error ${response.message}`)
         }
         const data = await response.data
         dispatch(follow(id))
         dispatch(followingSucces(id))
         return data
      }
      if (followCase === "unfollow") {
         const response = await usersApi.unfollowRequest(id)
         if (response.status !== 200) {
            console.log(response)
            return rejectWithValue(`Server error ${response.message}`)
         }
         const data = await response.data
         dispatch(unFollow(id))
         dispatch(followingSucces(id))
         return data
      }
   }
)

export const UsersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      follow: (state, action: PayloadAction<number>) => {
         state.users.map(user => {
            if (user.id === action.payload) {
               return user.followed = true
            }
            return user
         })
      },
      unFollow: (state, action: PayloadAction<number>) => {
         state.users.map(user => {
            if (user.id === action.payload) {
               return user.followed = false
            }
            return user
         })
      },
      setUsers: (state, action: PayloadAction<any>) => {
         state.users = action.payload
      },
      setUsersTotalCount: (state, action: PayloadAction<number>) => {
         state.totalUserCount = action.payload
      },
      changePage: (state, action: PayloadAction<number>) => {
         state.currentPage = action.payload
      },
      resetPage: (state) => {
         state.currentPage = 1
      },
      loadingUsers: (state, action: PayloadAction<boolean>) => {
         state.isLoadingUsers = action.payload
      },
      followingUsers: (state, action: PayloadAction<number>) => {
         state.followingUsers.push(action.payload)
      },
      followingSucces: (state, action: PayloadAction<number>) => {
         state.followingUsers = state.followingUsers.filter((el) => el !== action.payload)
      }
   },
   extraReducers(builder) {
      builder
         .addCase(fetchUsers.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload.items
            state.totalUserCount = action.payload.totalCount
            state.loading = false
         })
         .addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
         })
         .addCase(followToggleTunk.pending, (state) => {
         })
         .addCase(followToggleTunk.fulfilled, (state, action) => {

         })
         .addCase(followToggleTunk.rejected, (state, action) => {

         })
   },
}
)

export const { setUsers, setUsersTotalCount, changePage, resetPage, follow, unFollow, followingUsers, followingSucces } = UsersSlice.actions
export default UsersSlice.reducer