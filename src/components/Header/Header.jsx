import style from './Header.module.css'
console.log(style)

const Header = () => {
   return (
      <header className={style.header}>
         <div className={style.header__content}><img src="https://i.pinimg.com/originals/e7/eb/b9/e7ebb9c19633adddc0f06a7869f9c35b.png" alt="" className={style.logo} /></div>
      </header>
   )
}

export default Header