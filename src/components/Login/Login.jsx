import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginUserThunk, getCaptcha } from "../../redux/auth-Reducer";
import style from './Login.module.css'
import { useState } from "react";

const Login = (props) => {
   const [captchaErrorStatus, setCaptchaErrorStatus] = useState(false)
   const { register,
      handleSubmit,
      formState: { errors },
      setError,
      reset,
      resetField,
      clearErrors
   } = useForm({ mode: "onChange" });

   const onSubmit = (data) => {
      let captcha
      data.captcha ? captcha = data.captcha : captcha = false
      props.loginUserThunk(data.email, data.password, data.rememberMe, captcha, setError)
      resetField("captcha")


   }
   if (props.isAuth) { return <Navigate to="/profile" /> }
   return (
      <div className={style.login_wrapper}>
         <h1>Login page</h1>
         <form onSubmit={handleSubmit(onSubmit)}>
            <LoginEmail register={register} errors={errors} />
            <LoginPassword register={register} errors={errors} />
            <p>
               <label htmlFor="rememberMe">Запомнить меня:</label>
               <input type="checkbox" name="" id="rememberMe" {...register('rememberMe')} />
            </p>
            {props.showCaptcha ?
               <div className={style.captcha_block}>
                  <img src={props.captchaUrl} alt="" />
                  <label htmlFor="">Введите символы</label>
                  <input type="text" {...register('captcha')} />
               </div> :
               null}
            <button onClick={() => clearErrors(["server", "password"])}>Войти</button>
            {errors.server && <div style={{ color: 'red' }}>{errors.server.message}</div>}
         </form>
         <div className={style.test_data}>
            <h3>Данные тестового аккаунта:</h3>
            <p><span>Email: </span>free@samuraijs.com</p>
            <p><span>Password: </span>free</p>
         </div>
      </div>
   )
}

const LoginEmail = (props) => {
   let register = props.register
   let errors = props.errors
   return (
      <div>
         <p> <label htmlFor="email">Email:</label>
            <input placeholder="Email" id="email" type="text" {...register('email', {
               required: true,
               pattern: {
                  value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
               }
            })} aria-invalid={errors.email ? "true" : "false"} /></p>
         {errors.email?.type === 'required' && <p className={style.error}>email is required</p>}
         {errors.email?.type === 'pattern' && <p className={style.error}>enter correct email</p>}
      </div>
   )
}

const LoginPassword = (props) => {
   let register = props.register
   let errors = props.errors
   return (
      <div>
         <p><label htmlFor="password">Password:</label>
            <input placeholder="password" id="password" type="password"  {...register('password', { required: true, minLength: 4 })} aria-invalid={errors.name ? "true" : "false"} /></p>
         {errors.password?.type === 'required' && <p className={style.error}>password is required</p>}
         {errors.password?.type === 'minLength' && <p className={style.error}>minLength 8</p>}
         <p>
         </p>
      </div>
   )
}

let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      showCaptcha: state.auth.showCaptcha,
      captchaUrl: state.auth.captchaUrl,
   }
}
export default connect(mapStateToProps, {
   loginUserThunk,
   getCaptcha
})(Login)

