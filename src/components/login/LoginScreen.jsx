import React from 'react'
import {useNavigate} from 'react-router-dom'

export const LoginScreen = () => {
  const navigate = useNavigate();
  const handlerLogin = () => {
    navigate("/marvel",{replace:true})
  }
  return (
    <div className={`container pt-2`}>
      <h1>Login</h1>
      <button className={`btn btn-outline-primary`} onClick={handlerLogin}>Login</button>
    </div>
  )
}
