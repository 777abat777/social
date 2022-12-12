import { useState } from "react"
import { testApi } from "../../api/django-api"
import { useForm } from "react-hook-form";


const TestingPage = (props) => {
   const [users, setusers] = useState([{ name: null, alias: null }])
   const getUsers = () => {
      let promise = testApi.usersRequest()
      promise.then((data) => {
         setusers(data.data)
      })
   }

   const { register,
      handleSubmit,
   } = useForm({ mode: "onChange" });

   const onSubmit = (data) => {
      testApi.usersPostRequest(data.name, data.alias).then(() => {
         getUsers()
      })
   }


   return (
      <div>
         <div>
            {users.map((user) => <div><h3>{user.name}</h3> <span>{user.alias}</span></div>)}
            <button onClick={getUsers}>get</button>
         </div>
         <br />
         <br />
         <br />
         <br />
         <div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <p>
                  <label htmlFor="">имя</label>
                  <input {...register('name')} type="text" />
               </p>
               <p>
                  <label htmlFor="">Фамилия</label>
                  <input {...register('alias')} type="text" />
               </p>
               <button>post</button>
            </form>
         </div>
      </div>

   )
}

export default TestingPage