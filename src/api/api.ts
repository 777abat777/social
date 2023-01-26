import axios, { AxiosError } from "axios"

const instanse = axios.create(
   {
      withCredentials: true,
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      headers: {
         "API-KEY": "76a2c4fb-29e1-40bc-8a38-c7ed9276e271"
      }
   }
)

export const usersApi = {
   getUssers(pageSize: number, currentPage: number) {
      return (instanse.get(`users?count=${pageSize}&page=${currentPage}`))
         .then(
            (response) => {
               return response
            }
         )
         .catch((error) => {
            return error
         })

   },
   followRequest(id: number) {
      return (instanse.post(`follow/${id}`))
         .catch((error) => {
            return error
         })
   },
   unfollowRequest(id: number) {
      return (instanse.delete(`follow/${id}`))
         .catch((error) => {
            return error
         })
   }
}

export const headerApi = {
   getUsserdata() {
      return (instanse.get(`auth/me`)).then(
         (response) => {
            return response.data
         }
      )
   },
   login(email: any, password: any, rememberMe: any, captcha: any) {
      return (instanse.post(`auth/login`, { email, password, rememberMe: false, captcha })).then(
         (response) => {
            return response.data
         }
      )
   },
   logout() {
      return (instanse.delete(`auth/login`)).then(
         (response) => {
            return response.data
         }
      )
   },
   getCaptcha() {
      return (instanse.get(`/security/get-captcha-url`)).then(
         (response) => {
            return response.data
         }
      )
   },
}
export const profileApi = {
   getProfileUsserdata(userId: any) {
      return (instanse.get(`profile/${userId}`)).then(
         (response) => {
            return response.data
         }
      )
   },
   getProfileUsserStatus(userId: any) {
      return (instanse.get(`profile/status/${userId}`)).then(
         (response) => {
            return response.data
         }
      )
   },
   updateProfileUsserStatus(status: any) {
      return (instanse.put(`profile/status`, { status: status }))

   },
   setPhotoProfile(photo: any) {
      let photoFormData = new FormData()
      photoFormData.append('image', photo)
      return (instanse.put(`profile/photo`, photoFormData, {
         headers: { "Content-Type": "multipart/form-data" },
      }))

   },
   UpdateProfileUserData(data: any) {
      return (instanse.put(`profile`, data, {
         headers: { "Content-Type": "application/json" },
      }))
   },
}

