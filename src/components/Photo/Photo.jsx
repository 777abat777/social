import { useState } from 'react'
import style from './Photo.module.css'

import axios from "axios"


const instanseToApi = axios.create(
   {
      baseURL: 'http://127.0.0.1:8000/',
      headers: {
         "Content-Type": "application/json"
      }
   }
)
export const usersApi = {
   followRequest() {
      return (instanseToApi.get(`heroes/`)).then(
         (response) => {
            console.log(response)
            return response
         }
      )
   }
}

// axios.get('http://127.0.0.1:8000/heroes')
//    .then((response) => { console.log(response) })




// let promise = fetch('http://127.0.0.1:8000/heroes', {})
// promise.then((response) => {
//    console.log(response)
// })

const Photo = () => {
   let [counter, setCounter] = useState(0)
   const setCounterUp = () => {
      setCounter(counter + 1)
   }
   const setCounterDown = () => {
      setCounter(counter - 1)
   }
   return (
      <div>
         <img src="" alt="" />
         <h1>counter {counter}</h1>
         <button onClick={setCounterUp}>up</button>
         <button onClick={setCounterDown}>down</button>

         <button onClick={usersApi.followRequest}>get</button>
      </div>
   )
}
export default Photo
