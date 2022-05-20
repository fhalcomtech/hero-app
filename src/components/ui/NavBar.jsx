import React from 'react'
import {Link, NavLink} from "react-router-dom";
import icon from "../../assets/img/superhero1.png"

export const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
              <Link className="navbar-brand" to="/"><img src={icon} alt="icon"/></Link>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                      <NavLink className="nav-link" to="login">Login</NavLink>
                      <NavLink className="nav-link" to="search">Search</NavLink>
                      <NavLink className="nav-link" to="dc">Dc</NavLink>
                      <NavLink className="nav-link" to="marvel">Marvel</NavLink>
                  </div>
              </div>
          </div>
      </nav>
  )
}
