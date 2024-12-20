import React from 'react'
import './ForgetPass.css'

const ForgetPass = ({url}) => {
  return (
    <div className="recall-forget">
        <a href={url}> Esqueceu a senha?</a>
    </div>
  )
}

export default ForgetPass
