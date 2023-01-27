// Define a type for the slice state
export interface UsersStateInterface {
   users: Array<UserType>,
   pageSize: number,
   currentPage: number,
   totalUserCount: number,
   isLoadingUsers: boolean,
   loading: boolean,
   error: string | null | undefined,
   followingUsers: Array<number>
}

export type UserType = {
   followed: boolean,
   id: number
   name: string
   photos: { small: any }
   loading: null | string
   uniqueUrlName: null | string
   status: null | string
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