import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginUserThunk } from "../../redux/auth-Reducer";


// Добавить капчу


const Login = (props) => {
   const { register,
      handleSubmit,
      formState: { errors },
      reset
   } = useForm({ mode: "onChange" });

   const onSubmit = (data) => {
      props.loginUserThunk(data.email, data.password, data.rememberMe)
      reset()

   }
   console.log(props)
   if (props.isAuth) { return <Navigate to="/profile" /> }
   return (
      <div>
         <h1>Login page</h1>
         <form onSubmit={handleSubmit(onSubmit)}>
            <p> <label htmlFor="email">Email</label>
               <input placeholder="Email" id="email" type="text" {...register('email', {
                  required: true,
                  pattern: {
                     value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
                  }
               })} aria-invalid={errors.email ? "true" : "false"} /></p>
            {errors.email?.type === 'required' && <p >email is required</p>}
            {errors.email?.type === 'pattern' && <p >enter correct email</p>}
            <p><label htmlFor="password">Password</label>
               <input placeholder="password" id="password" type="password"  {...register('password', { required: true, minLength: 8 })} aria-invalid={errors.name ? "true" : "false"} /></p>
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
let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth
   }
}
export default connect(mapStateToProps, {
   loginUserThunk
})(Login)

