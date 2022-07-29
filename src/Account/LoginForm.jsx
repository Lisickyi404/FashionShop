import './style.scss'
import {loginContext} from '../App'

import React from 'react'   



function LoginForm(){
    const {login,setLogin,setChek} = React.useContext(loginContext)
    const [name,setName] = React.useState('')
    const [pasword,setPasword] = React.useState('')

    const psword=''
    const textName = (event) =>{
        setName(textInput.current.value)
    }
    const setPw = (event) =>{
        setPasword(pwInput.current.value)
    }


    let textInput=React.createRef()
    let pwInput=React.createRef()

    const handleSubmit = (event) =>{
        if (name=='user' || pasword=='user'){
            setLogin(true)
        }
    }
    return(
        <div className={login?'hide':"LoginForm"}>
            <form>
                <span>Вход в личный кабинет</span>
                <input className="regEmail" name='name' placeholder={'электронная почта'} type='text' onInput={textName} ref={textInput}></input>
                <input className="regPw" placeholder={'пароль'} type='text' onInput={setPw} ref={pwInput}></input>
                <div className="buttons">
                    <button className="logAc" type='button' onClick={()=>handleSubmit()}>Войти в кабинет</button>
                    <button className="rgistr">Регистрация</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;