import React, {useContext} from 'react';
import {AuthContext} from "../../auth/context/AuthContext";
import {Navigate} from "react-router-dom";

const PublicRoute = ({children}) => {
    const {authState:{logged}} = useContext(AuthContext)
    return (logged ? <Navigate to={"/"}/> : children);
};

export default PublicRoute;
