import React from 'react'
import {Link, NavLink, useNavigate} from "react-router-dom";
import icon from "../../assets/img/superhero1.png"

export const NavBar = () => {
  const navigate = useNavigate();
  const fnHandlerLogout = () => {
      navigate("/login");
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
                <span className="nav-link text-primary">Fidel</span>
                <button className="nav-link btn btn-outline-secondary text-white" onClick={fnHandlerLogout}>Logout</button>
              </div>
          </div>
      </nav>
  )
}
