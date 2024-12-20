import React from 'react'
import {FaUser, FaLock} from 'react-icons/fa'
import { useState } from 'react'
import './Login.css'
import InputLogin from './InputLogin.jsx'
import ForgetPass from './ForgetPass.jsx'

const Login = () => {

    const [username, SetUsername] = useState("")
    const [password, SetPassword] = useState("")

    const HandleSubmit = (event) => {
        event.preventDefault()
        console.log('Envio: Usuario: ', username, 'senha: ', password)
    }

  return (
    <div>
      <div className="container">
        <form onSubmit={HandleSubmit}>
            <h1>ARMAZEM 187</h1>
            <InputLogin tipo="text" place="Usuário" icon="FaUser" onChange={(e) => SetUsername(e.target.value)}/>
            <InputLogin tipo="password" place="Senha" icon="FaLock" onChange={(e) => SetPassword(e.target.value)}/>
            <ForgetPass url="EsqueciMinhaSenha" />
            <button>Entrar</button>
        </form>
      </div>
    </div>
  )
}

/*
<div className='input-field'>
                <input type="email" placeholder="E-mail" onChange={(e) => SetUsername(e.target.value)}/>
                <FaUser className='icon'/>
            </div>
*/

export default Login
