import axios from "axios"

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
   getUssers(pageSize, currentPage) {
      return (instanse.get(`users?count=${pageSize}&page=${currentPage}`)).then(
         (response) => {
            return response.data
         }
      )
   },
   followRequest(id) {
      return (instanse.post(`follow/${id}`))
   },
   unfollowRequest(id) {
      return (instanse.delete(`follow/${id}`))
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
   login(email, password, rememberMe) {
      return (instanse.post(`auth/login`, { email, password, rememberMe: false })).then(
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
}
export const profileApi = {
   getProfileUsserdata(userId) {
      return (instanse.get(`profile/${userId}`)).then(
         (response) => {
            return response.data
         }
      )
   },
   getProfileUsserStatus(userId) {
      return (instanse.get(`profile/status/${userId}`)).then(
         (response) => {
            return response.data
         }
      )
   },
   updateProfileUsserStatus(status) {
      return (instanse.put(`profile/status`, { status: status }))

   },
   setPhotoProfile(photo) {
      let photoFormData = new FormData()
      photoFormData.append('image', photo)
      return (instanse.put(`profile/photo`, photoFormData, {
         headers: { "Content-Type": "multipart/form-data" },
      }))

   }
}

