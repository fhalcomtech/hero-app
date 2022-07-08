import React, {useReducer} from 'react';
import {AuthContext} from "./AuthContext";
const initialState = () => {
    return ({})
}
const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthProvider,{},initialState)
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
