import React, {useContext} from 'react'
import {Link, NavLink, useNavigate} from "react-router-dom";
import icon from "../../assets/img/superhero1.png"
import {AuthContext} from "../../auth/context/AuthContext";

export const NavBar = () => {
  const navigate = useNavigate();
  const {authState, logout} = useContext(AuthContext);
  const fnHandlerLogout = () => {
      navigate("/login");
      logout();
  }
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
              <Link className="navbar-brand" to="/"><img src={icon} alt="icon"/></Link>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                      <NavLink className={({isActive})=>`nav-link ${isActive?'active':''}` } to="Login">Login</NavLink>
                      <NavLink className={({isActive})=>`nav-link ${isActive?'active':''}` } to="Search">Search</NavLink>
                      <NavLink className={({isActive})=>`nav-link ${isActive?'active':''}` } to="Dc">Dc</NavLink>
                      <NavLink className={({isActive})=>`nav-link ${isActive?'active':''}` } to="Marvel">Marvel</NavLink>
                  </div>
              </div>
              <div className="d-flex">
                <span className="nav-link text-primary">{authState["user"]?authState.user.username:""}</span>
                <button className="nav-link btn btn-outline-secondary text-white" onClick={fnHandlerLogout}>Logout</button>
              </div>
          </div>
      </nav>
  )
}
