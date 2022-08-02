import React,{useContext} from "react";
import {AuthContext} from "../../auth/context/AuthContext";
import {Navigate, useLocation} from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {authState:{logged}} = useContext(AuthContext)
    const {pathname, search} = useLocation();
    localStorage.setItem('lastVisited', `${pathname}${search}`)
    return (logged? children : <Navigate to={"login"}/>);
};

export default PrivateRoute;
