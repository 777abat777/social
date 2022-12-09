import { useState } from 'react'
import style from './Photo.module.css'
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
         <h1>counter {counter}</h1>
         <button onClick={setCounterUp}>up</button>
         <button onClick={setCounterDown}>down</button>
      </div>
   )
}
export default Photo
