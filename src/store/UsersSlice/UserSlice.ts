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
   error: string | null | undefined
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
   pageSize: 7,
   currentPage: 1,
   totalUserCount: 50,
   isLoadingUsers: true,
   loading: false,
   error: null
}
export type ResponseData = {
   error: null,
   items: Array<UserType>,
   totalCount: number
}

export const fetchUsers = createAsyncThunk<ResponseData, { pageSize: number, currentPage: number }, { rejectValue: string }>(
   'users/fetchUsers',
   async ({ pageSize, currentPage }, { rejectWithValue, dispatch }) => {
      const response = await usersApi.getUssers(pageSize, currentPage)
      if (response.status !== 200) {
         return rejectWithValue(`Server error ${response.message}`)
      }
      const data: ResponseData = await response.data
      return data
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
   },
}
)

export const { setUsers, setUsersTotalCount, changePage } = UsersSlice.actions
export default UsersSlice.reducer