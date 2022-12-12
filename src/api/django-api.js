import axios from "axios"


const instanseToApi = axios.create(
   {
      baseURL: 'http://127.0.0.1:8000/',
      headers: {
         "Content-Type": "application/json"
      }
   }
)
export const testApi = {
   async usersRequest() {
      const response = await (instanseToApi.get(`heroes/`))
      console.log(response)
      return response
   },
   async usersPostRequest(name, alias) {
      const response = await (instanseToApi.post(`heroes/`, { name, alias }))
      console.log(response)
      return response
   }
}