
import { useForm } from "react-hook-form";

const Login = (props) => {
   const { register,
      handleSubmit,
      formState: { errors }
   } = useForm({ mode: "onChange" });


   const onSubmit = (data) => { console.log(data); }

   return (
      <div>
         <h1>Login page</h1>
         <form onSubmit={handleSubmit(onSubmit)}>
            <p><input type="text" {...register('name', { required: true, maxLength: 20 })} aria-invalid={errors.name ? "true" : "false"} /></p>
            {errors.name?.type === 'required' && <p >name is required</p>}
            {errors.name?.type === 'maxLength' && <p >maxLength 20</p>}
            <p><input type="text"  {...register('password', { required: true, minLength: 8 })} aria-invalid={errors.name ? "true" : "false"} /></p>
            {errors.password?.type === 'required' && <p >password is required</p>}
            {errors.password?.type === 'minLength' && <p >minLength 8</p>}
            <p>
               <label htmlFor="rememberMe">Запомнить меня</label>
               <input type="checkbox" name="" id="rememberMe" {...register('rememberMe')} />
            </p>
            <button>Войти</button>
         </form>
      </div>
   )
}

export default Login

