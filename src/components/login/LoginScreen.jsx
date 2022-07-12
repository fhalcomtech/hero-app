import React, {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {AuthContext} from "../../auth/context/AuthContext";

export const LoginScreen = () => {
  const {login} = useContext(AuthContext);
    const navigate = useNavigate();

  const handlerLogin = () => {
      login("fhalcom.dev@gmail.com", "Lascano");
    navigate("/marvel",{replace:true})
  }
  return (
    <div className={`container pt-2`}>
      <h1>Login</h1>
      <button className={`btn btn-outline-primary`} onClick={handlerLogin}>Login</button>
    </div>
  )
}
